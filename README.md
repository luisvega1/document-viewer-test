# Document Viewer App
## :globe_with_meridians: [LIVE DEMO](https://luisvega1.github.io/document-viewer-test/) :globe_with_meridians:

This project is a document viewer where you can add annotations to the document pages, edit the annotations, add images and customize them with colors and opacity.

## :rocket: To run the project

To run the project you are going to have installed [Angular Cli v13](https://angular.io/cli) as well as [Nodejs](https://nodejs.org/en)
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## :memo: Overview
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/33081742/230534301-eafb7fa3-9fd7-4de9-99bf-04e883e2a491.png">

Document Viewer, is an application to view documents.
You can add annotations in each page of the document by clicking the note button in the action buttons, at the right of the screen.

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/33081742/230534709-599439a5-9401-4e71-b42f-c6057dec0198.png">

Once you crated your note, you can edit it by clicking the edit button that appears when you hover the annotation. Also, it is possible to delete the annotation by clicking the button next to the edit button.

When you click in the edit button, another 2 buttons are shown, the save button and add image button.
You can add an image to the annotation by clicking this button and selection your image. Save the changes and the annotation will be shown with the new text and image that you selected.

You can also customize the annotation with a few colors that we offer. You can to this by clicking the edit button form the annotation and then, the options will be shown at the right of the annotation, to change the color of the annotation you have to click on the color of your prefference. In the same are, you can change the opacity of the annotation by moving the range input below the color options.

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/33081742/230535502-c9e6002b-a591-4b12-8cd7-28731c41d5ad.png">

To save the annotations in one page, you have to press the save button at the action buttons, in the right. This action, will save all the status of the page where you added annotations, so in the next time you visit the page, your annotations will be there. REMEMBER TO DO THIS STEP!

## :sparkles: Pros of the platform

:white_check_mark: Edit annotation content
:white_check_mark: Change color of the annotation
:white_check_mark: Change opacity of the annotation

## :boom: Cons of the platform

:fire: The platform is not responsive
:fire: You can not resize the annotation
:fire: You can not rotate the annotation

## :triangular_flag_on_post: Know issues

:bug: When you zoom the page of the document, annotations don't zoom in/zoom out with the page. This could be solved adding some css properties.
