function mein() {
    $(".images").one("click", function (event) {
        $(".popUp").css("display", "flex")
        var imageToShow = event.target.id

        $("<img>").appendTo(".popUp").attr("src", "img/" + imageToShow + ".jpg")
        $(".popUp").attr("id", imageToShow)
        console.log(imageToShow);
    });


    $("#prev").on("click", function () {
        var currentId = $(this).parent().attr("id")
      
        while(currentId == 1){
            console.log(currentId);
            currentId --;
        }
        $("<img>").appendTo(".popUp").attr("src", "img/" + currentId + ".jpg")
        $(".popUp").attr("id", currentId)

    })

    $("#next").on("click", function () {
        var nextImg = imageToShow + 1; //??? prvo da proveri dali e posleden, nemam pristap do idto
        // console.log(prevImg);

    })

    $("#close").on("click", function () {
        $(".popUp").css("display", "none")
    })

    this.imagesLastId = 6;
    $("#add").on("click", function () {
        var url = $("#imageURL").val()
        var alt = $("#altText").val()
        $("<div>").appendTo(".imgWrap").attr("id", "img" + this.imagesLastId)
        $("<img>").appendTo("#" + "img" + this.imagesLastId).attr("src", "img/" + url).attr("alt", alt);
        $("<button>").appendTo("#" + "img" + this.imagesLastId).text("Delete").attr("id", "delete");
        $("<button>").appendTo("#" + "img" + this.imagesLastId).text("Edit").attr("id", "edit");;

        this.imagesLastId++;
    })

    $(".imgWrap").on("click", "#delete", function () {
        var selected = $(this).parent().attr("id");
        $("#" + selected).remove();
    })


    $(".imgWrap").on("click", "#edit", function(){
        var selected = $(this).parent().attr("id");

        console.log(selected);
        var imgURL = $("#" + selected + " img").attr("src")
        var alt = $("#" + selected + " img").attr("alt")
        
        
        $("<input>").appendTo("#" + selected).val(imgURL).addClass("url")
        $("<input>").appendTo("#" + selected).val(alt).addClass("alt")
        $("<button>").attr("id", "save").text("Save").appendTo("#" + selected);
        $("<button>").attr("id", "endChanges").text("End Changes").appendTo("#" + selected);

        $("#save").on("click", function(){
            var newUrl = $(".url").val()
            var newAlt = $(".alt").val()

            
            $("#" + selected + " img").attr("src", newUrl);
            $("#" + selected + " img").attr("alt", newAlt);
        })

        $("#endChanges").on("click", function(){
            $("#endChanges").css("display", "none");
            $("#save").css("display", "none")
            $(".url").css("display", "none")
            $(".alt").css("display", "none")
        })
    });

   

}

$(document).ready(mein)