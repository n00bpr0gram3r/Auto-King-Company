# Deployment Checklist

## File Structure
```
public_html/
├── api/
│   ├── booking.php
│   └── config.php
├── vendor/
├── .env
├── .htaccess
└── contact-handler.php
```

## Steps to Deploy

1. **Prepare Files**
   - Ensure all files are using the correct environment variables
   - Remove any debugging code or console.log statements
   - Make sure all sensitive information is in the .env file

2. **Upload Files**
   - Upload all files to the correct directory on Hostinger
   - Maintain the same directory structure as shown above
   - Make sure to upload the vendor directory

3. **Set File Permissions**
   - Set .env file permissions to 644
   - Set PHP files permissions to 644
   - Set directories permissions to 755
   - Set vendor directory permissions to 755

4. **Environment Variables**
   - Create .env file on the server with the following variables:
   ```
   DB_HOST=autokingksa.com
   DB_USER=u867976395_akcksa
   DB_PASSWORD=502021314@aA
   DB_NAME=u867976395_AKC_backEnd
   
   SMTP_HOST=smtp.hostinger.com
   SMTP_PORT=465
   SMTP_USER=site-mail@autokingksa.com
   SMTP_PASS=Sitemail@1
   RECIPIENT_EMAIL=sales@autokingksa.com
   
   ULTRAMSG_INSTANCE_ID=instance111453
   ULTRAMSG_TOKEN=rt9wptyttdik2ogz
   ADMIN_WHATSAPP_NUMBER=+966502021314
   ```

5. **Test Endpoints**
   - Test the booking endpoint: https://autokingksa.com/api/booking.php
   - Test the contact handler: https://autokingksa.com/contact-handler.php
   - Verify CORS is working with your frontend

6. **Check Logs**
   - Monitor php_errors.log for any issues
   - Check the server's error logs if needed

7. **Security Checks**
   - Verify .env file is not accessible
   - Check that sensitive files are protected
   - Ensure HTTPS is working correctly

## Troubleshooting

If you encounter issues:

1. **CORS Issues**
   - Check the .htaccess file is properly configured
   - Verify the allowed origins in booking.php
   - Check browser console for CORS errors

2. **Database Connection**
   - Verify database credentials in .env
   - Check if the database host is accessible
   - Ensure the database user has proper permissions

3. **Email Issues**
   - Check SMTP settings in .env
   - Verify the email account is active
   - Check spam folder for test emails

4. **WhatsApp Issues**
   - Verify UltraMsg credentials
   - Check if the WhatsApp number is properly formatted
   - Ensure the UltraMsg account has sufficient credits

## Support

If you need help:
1. Check the error logs
2. Contact Hostinger support
3. Review the UltraMsg documentation 