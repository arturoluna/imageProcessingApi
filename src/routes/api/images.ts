// src/routes/api/images.ts

import express from 'express';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import {outputFolderPath}  from '../../config'

const router = express.Router();
const fullFolderPath = path.join(__dirname, './full');
// const outputFolderPath = path.join(__dirname, './output');

router.get('/', async (req, res) => {
  try {
    console.log('Endpoint /images is running'); // Log message when endpoint is hit

    // You can add additional logic here if needed
    // Read the list of files in the "full" folder
    const files = fs.readdirSync(fullFolderPath);

    // Get width and height parameters from the query string
    const width: number = parseInt(req.query.width as string, 10) || 200; // Default width is 200 if not provided
    const height: number = parseInt(req.query.height as string, 10) || 200; // Default height is 200 if not provided
    console.log(fullFolderPath)

    // Iterate over each file
  // Iterate over each file
    for (const file of files) {
      // Check if it's an image file (you can adjust this check based on your requirements)
      if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png')) {
        // Get the full path of the image file
        const imagePath = path.join(fullFolderPath, file);

        // Use Sharp to resize the image
        const resizedImageBuffer = await sharp(imagePath)
          .resize({ width, height })
          .toBuffer();

        // Save the resized image to the "output" directory
        const outputPath = path.join(outputFolderPath, file);
        console.log(outputPath)
        fs.writeFileSync(outputPath, resizedImageBuffer);
      }
    }


    
    res.send('Endpoint /images is running'); // Send a response
  } catch (err) {
    // Handle errors
    console.error('Error:', err);
    res.status(500).send('Internal Server Error');
  }
});



export default router;
