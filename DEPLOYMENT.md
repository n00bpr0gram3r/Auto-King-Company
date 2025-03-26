# Auto King KSA - Deployment Guide

## Prerequisites
- Node.js and npm installed
- Angular CLI installed globally
- Access to Hostinger control panel
- FTP access or File Manager access to Hostinger

## Build Process

1. **Build Angular Application**
```bash
# Install dependencies
npm install

# Build for production
ng build --configuration production
```

2. **Prepare Files for Upload**

Create the following structure in your local machine:
```
autokingksa.com/
├── public_html/           # Frontend files
│   └── (contents of dist/Auto-King-Company)
└── backend/              # Backend files (already prepared)
    ├── api/
    ├── vendor/
    └── (other backend files)
```

## Upload Process

1. **Frontend Files**
   - Log in to Hostinger control panel
   - Go to File Manager
   - Navigate to `public_html`
   - Delete all existing files (except .htaccess if it exists)
   - Upload all contents from your local `dist/Auto-King-Company` folder

2. **Backend Files**
   - Navigate to root directory
   - Create a new folder called `backend` if it doesn't exist
   - Upload the entire backend folder from your local machine

3. **File Permissions**
   Set the following permissions:
   ```
   backend/api/logs: 755
   backend/api/logs/error.log: 644
   ```

4. **SSL Configuration**
   - Ensure SSL is enabled for your domain
   - Verify all URLs use HTTPS

## Post-Deployment Checklist

1. **Frontend Verification**
   - Visit https://autokingksa.com
   - Check if all assets load correctly
   - Verify all links work properly
   - Test responsive design on different devices

2. **Backend Verification**
   - Test the booking form
   - Verify email notifications
   - Check WhatsApp notifications
   - Monitor error logs in backend/api/logs/error.log

3. **Database Verification**
   - Confirm database connection
   - Test booking submission
   - Verify data is being stored correctly

## Troubleshooting

If you encounter issues:

1. **Frontend Issues**
   - Clear browser cache
   - Check browser console for errors
   - Verify API URLs in environment.prod.ts

2. **Backend Issues**
   - Check error logs in backend/api/logs/error.log
   - Verify file permissions
   - Confirm PHP version (7.4 or higher)

3. **Database Issues**
   - Verify database credentials in config.php
   - Check database connection
   - Confirm table structure

## Maintenance

Regular maintenance tasks:
1. Monitor error logs
2. Backup database regularly
3. Update dependencies as needed
4. Check SSL certificate validity 