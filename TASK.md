# mobile.de Frontend Coding Challenge - View Item Page
## Introduction
Thank you for applying for a Front-end Engineer position at mobile.de, and congratulations on the previous
successful steps. Prior to your in-person interviews, we kindly ask you to complete the following assignment.
This exercise is designed to assess your development skills.

We will evaluate the work you send us against the criteria explained below. 

Navigate to this URL: 

https://suchen.mobile.de/fahrzeuge/details.html?id=237089773

This is a page belonging to a car sold on the mobile.de platform. In eBay terminology, this page is called
a VIP (View Item Page).

For our mobile applications, we have an API that serves the same data to build this page in JSON format. An
example of this JSON response can be accessed via this URL: 
		
https://www.mobile.de/hiring-challenge.json

Please open this URL to use the JSON in your project. Use this URL as API in your project. In case you have problems accessing this file in your app, please download it using a browsr and read the file from the local file system in your solution for this challenge.

In this JSON you will see a couple of elements, e.g. an `images` array with content like this:

    {
        "uri": "i.ebayimg.com/00/s/NjgyWDEwMjQ=/z/znIAAOxynwlTcg-F/$",
        "set": "fe4cfedffdffffffff"
    }

and other elements like `price`, `contact`, `attributes` and `description`. The goal of this challenge for you
is to create a simple responsive version of a mobile.de VIP using this JSON as data source. 

As you can see the `images` array does not contain complete URLs to the images. You will have to prepend the used
transfer protocol, an image index, which specifies the size of the image and the file extension `.jpg` to get a valid URL.

Please use the following indexes for the different image sizes:

* `_2` for thumbnails
* `_27` for normal size images
* `_57` for fullscreen images


## Tasks
1. Create a simple VIP based on [node.js](https://nodejs.org/) and [react.js](https://reactjs.org/), that properly works in one of the major browsers (Google Chrome, Mozilla Firefox, Apple Safari or Microsoft Edge)
2. Add a simple picture gallery to the VIP with the following functionality
    * The user can browse through the images
    * The user can click/tap on the image to get a fullscreen view of the image
    * The user can close the fullscreen view and get back to the VIP
3. Add the title and the price to the VIP
4. Make sure this web site fulfills the basic SEO requirements. Name the SEO features, you implemented and explain them!
5. Add a list with technical data attributes to the VIP
6. Add a list of features to the VIP
7. Add the vehicle description to the VIP
8. Add the contact information of the seller to the VIP
9. Make sure, the application is properly tested!
10. Make the design look pretty. It does not have to look like the original mobile.de VIP, come up with your own design!
11. Document your solution!
12. Make your website work properly in the other three browsers, too!

Good luck!
