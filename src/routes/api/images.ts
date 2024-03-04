// src/routes/api/images.ts

import express from 'express';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const router = express.Router();
const fullFolderPath = path.join(__dirname, './full');

router.get('/', async (req, res) => {
  try {
    console.log('Endpoint /images is running'); // Log message when endpoint is hit

    // You can add additional logic here if needed
    // Read the list of files in the "full" folder
    const files = fs.readdirSync(fullFolderPath);

    // Iterate over each file
    for (const file of files) {
      // Check if it's an image file (you can adjust this check based on your requirements)
      if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png')) {
        // Get the full path of the image file
        const imagePath = path.join(fullFolderPath, file);

        // Use Sharp to get image metadata
        const imageMetadata = await sharp(imagePath).metadata();

        // Log image information
        console.log(`Image Name: ${file}`);
        console.log(`  Format: ${imageMetadata.format}`);
        console.log(`  Width: ${imageMetadata.width}`);
        console.log(`  Height: ${imageMetadata.height}`);
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
