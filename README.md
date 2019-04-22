# W-C_assesment

When tasked with this project, I was presented with an immediate hurdle, I have never used a sketch file before. Luckily enough I had the foresight to take the assets and their attributes in an attempt to implement the design provided.

# in-line CSS
My prior React knowledge allows me to infer that this is an application with nested containers starting with a parent container or page. This allowed making the decision that certain containers or properties should have unique styling.
  
  Take ProductItem.js as an example: src/components/ProductItem.js

This component will generate 3 child containers, one for each product and while it will render in its proper hierarchy, we would like them to have the same style properties. We want each product image, button and text to render in the same position and be scalable for different devices. With this in mind, in the ProductItem component, I created a few CSS objects with serval style properties to ensure consistency between the product constituents. You will notice this pattern in the container and component directories.

# Product Images
I was delighted to see I had a JSON file to work within the API directory, once I noticed this object needed an image property I just needed to figure out how to do it. At first, I was attempting to work with a relative path to an image but that attempt led to dead ends. Then I just moved on to the next best thing, an online repo, I uploaded the product images to one of my GitHub repos and tested the addresses in an image tag. This proved successful and I filled in the JSON object with the proper addresses, that is how each product image renders correctly.

    src/components/ProductItem.js 
    src/api/products.json

You can reference the two classes above to get a better idea of what I am referring to.

# Issues implementing the cart
Currently, this version does not implement a modal showcasing the CartContainer container, I attempted to create a placeHolder modal to test how it would work for our test case. However I could not implement it in time for submission but I would love some feedback on how to do this properly, you can find this attempt here: src/containers/cartModal.js. One bright spot however, I made sure the cart button can shift between two images when our cursor hovers over it, using event handlers.

# If I could do this assessment over, I would create separate button components and use states, and make use of media queries

This sample project uses simple HTML button tags to create buttons, Had I chosen to create them as a React component instead, I would have been able to set states to handle disable and hover states more effectively, instead of using mouse cursor events to add behaviors. Also had I made use of media queries, I probably had been able to avoid a current regression case when the page is rendered below a width of 600px. The page is not broken by any means at that size but it could look a little better or more consistent.

