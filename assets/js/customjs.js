
   /*for pdf*/
   $(document).ready(function () {
    $("#generatePDF").click(function () {
        const { jsPDF } = window.jspdf;
        var $button = $(this);
        var $loading = $("#loading");

        // Disable the button and show the loading indicator
        $button.prop("disabled", true);
        $loading.show();

        // Create a new jsPDF instance
        var doc = new jsPDF("p", "mm", "a4");

        // Capture the content as a canvas
        html2canvas(document.querySelector("#content"), {
            useCORS: true,
            allowTaint: false,
            scale: 1,
        })
        .then(function (canvas) {
            var imgData = canvas.toDataURL("image/png");
            var imgWidth = 190; // Full width of A4 size page
            var pageHeight = 290; // Full height of A4 size page
            var imgHeight = (canvas.height * imgWidth) / canvas.width;
            var heightLeft = imgHeight;
            var position = 10;

            // Add the first image to the PDF
            doc.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            // Add new pages if necessary
            while (heightLeft > 0) {
                position = heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            // Save the PDF
            doc.save("Bhomes-flyer.pdf");

            // Re-enable the button and hide the loading indicator
            $button.prop("disabled", false);
            $loading.hide();
        })
        .catch(function (error) {
            // In case of an error, re-enable the button and hide the loading indicator
            $button.prop("disabled", false);
            $loading.hide();
            console.error("PDF generation error: ", error);
        });
    });

    var $div = $('#unitval');

// Check if the div text is "Available"
if ($div.text().trim() === 'Just Available') {
// Change the text to "Listed"
$div.text('Just Listed');
}

var text = $('#unitval').text().trim(); 
if (text === 'Just Sold') {
$('#unitval').css('color', 'red'); 
}
var $div = $('#unitval');

// Check if the div text is "Available"
if ($div.text().trim() === 'Just Leased') {
// Change the text to "Listed"
$div.text('Just Rented');
$('#unitval').css('color', 'red'); 
}
});


function getImage(event) {
    event.preventDefault(); // prevent default button behavior
    var content = document.querySelector("#content");

    // Define the padding/margin size (in pixels)
    var padding = 0;

    html2canvas(content, {
      useCORS: true,
      scale: 1,
    }).then((canvas) => {
      // Create a new canvas with extra space
      var newCanvas = document.createElement("canvas");
      newCanvas.width = canvas.width + padding * 2;
      newCanvas.height = canvas.height + padding * 2;

      var ctx = newCanvas.getContext("2d");
      ctx.fillStyle = "#ffffff"; // Set the background color (optional)
      ctx.fillRect(0, 0, newCanvas.width, newCanvas.height); // Fill the new canvas with white background

      // Draw the original canvas onto the new canvas with padding
      ctx.drawImage(canvas, padding, padding);

      // Convert the new canvas to an image
      const imgData = newCanvas.toDataURL("image/jpeg");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "image.jpg";
      link.click();
    });
  }
if (document.body.classList.contains('body-url-status')) {
var currentUrl = window.location.href;
if (currentUrl.includes("https://demo.goyzer.com/Pages/UnitCard.aspx")) {
    document.querySelectorAll('*').forEach(function(element) {
        element.contentEditable = "false";
    });
}
if (currentUrl.includes("https://savillsme.goyzer.com/Pages/UnitCard.aspx")) {
    document.querySelectorAll('*').forEach(function(element) {
        element.contentEditable = "false";
    });
}
} 
        
     