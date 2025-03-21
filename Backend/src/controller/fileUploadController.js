const cloudinary = require('../cloudinaryConfig/cloudinaryConfig.js')
const fs = require('fs');

const uploadFileController = async (req, res) => {
    try {
        const { subject, paperType } = req.body;
        
        if (!req.file) {
            return res.status(400).json({ 
                success: false,
                message: 'No file uploaded' 
            });
        }
        
        const folder = `papers/${subject}/${paperType}`;
        
        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: folder,
            resource_type: 'auto' 
        });
        
        fs.unlinkSync(req.file.path);
        
        console.log("FILE URL ---> ", result.secure_url);
        return res.status(201).json({
            success: true,
            message: 'File uploaded successfully',
            data: {
                url: result.secure_url,
                publicId: result.public_id,
                format: result.format,
                subject,
                paperType
            }
        });
        
    } catch (error) {
        console.error('Upload error:', error);
        return res.status(500).json({ 
            success: false,
            message: 'Upload failed', 
            error: error.message 
        });
    }
};

module.exports = {
    uploadFileController
}; 