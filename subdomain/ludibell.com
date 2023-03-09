server {
    listen 80;
    listen [::]:80;
    server_name *.ludibell.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name *.ludibell.com;
    ssl_certificate /etc/letsencrypt/live/ludibell.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/ludibell.com/privkey.pem;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers HIGH:!aNULL:!MD5;
    root /var/www/ludibell.com/html;
    index index.html;
    location / {
        try_files $uri $uri/ =404;
    }
}

