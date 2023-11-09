__NUXT_JSONP__("/blog/s6-overlay-quickstart", (function(a,b,c,d,e,f,g,h,i,j){return {data:[{blog:{id:6,status:"published",sort:a,date_created:"2023-11-08T14:32:00.000Z",date_updated:"2023-11-09T07:29:43.236Z",slug:"s6-overlay-quickstart",title:b,description:"\u003Cp data-pm-slice=\"1 1 []\"\u003ES6-overlay is designed for docker containers. But, It is hard to understand from the \u003Cu\u003E\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fjust-containers\u002Fs6-overlay\u002Fblob\u002Fmaster\u002FREADME.md\" target=\"_self\"\u003EReadme\u003C\u002Fa\u003E\u003C\u002Fu\u003E of the \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fjust-containers\u002Fs6-overlay\" target=\"_self\"\u003Erepository\u003C\u002Fa\u003E. So, I thought that let&rsquo;s write a quick start guide for it.\u003C\u002Fp\u003E\n\u003Ch2\u003E&nbsp;\u003C\u002Fh2\u003E",seo_title:b,seo_description:b,content:"\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EWhat is S6-Overlay?\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003ES6-overlay is a container-focused process manager that offers end-to-end management of the container's lifecycle, from initialization to graceful shutdown. Its innovative design and feature set make it a compelling alternative to other process managers, such as supervisord. But what sets it apart from the rest? Let's explore its key features.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EKey Features of S6-Overlay\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EVersatile Process Management:\u003C\u002Fstrong\u003E S6-overlay efficiently handles both one-time tasks and long-running processes, making it versatile for containerized tasks.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EDependency Control:\u003C\u002Fstrong\u003E Establish dependencies between processes to ensure orderly execution in complex application stacks.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003ESequence Management: \u003C\u002Fstrong\u003EControl the start and stop sequence of processes, streamlining container operations.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EEnvironment Variable Templating:\u003C\u002Fstrong\u003E Easily customize process behavior with environment variables, adapting to different environments.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EEasy Integration:\u003C\u002Fstrong\u003E Seamlessly integrate S6-overlay into Docker images with a straightforward installation process.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003ELog Management:\u003C\u002Fstrong\u003E Built-in log rotation simplifies log file management within container environments.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EGraceful Shutdown:\u003C\u002Fstrong\u003E Ensure data integrity with graceful process shutdown and the ability to execute custom scripts before container shutdown.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EMulti-Arch Support:\u003C\u002Fstrong\u003E S6-overlay accommodates the diverse landscape of container platforms with support for multi-architecture container images.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EDirectory Structure of S6-Overlay\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003ES6-overlay's directory structure sets it apart from other process managers, providing flexibility for process management in container environments. The base directory, \u002Fetc\u002Fs6-overlay\u002Fs6-rc, serves as the starting point. To manage processes effectively, create a directory for each process you wish to run. Within these directories, several key files play essential roles:\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EType File:\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003EDefine the nature of your process by writing either \"oneshot\" or \"longrun.\" Use \"oneshot\" for tasks that run as initializations before primary processes. For continuous daemon processes supervised by S6, choose \"longrun.\"\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EUp File:\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003EIn this file, specify the file path of your script. This path guides S6 to run the script. If left blank, S6 will consider the \"run\" file as your script.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003ERun File:\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003EHere, you write the script or process that your container executes. If necessary, you can utilize environment variables and the \u003Ca href=\"https:\u002F\u002Fskarnet.org\u002Fsoftware\u002Fexecline\u002Fexeclineb.html\"\u003Eexeclineb\u003C\u002Fa\u003E command for added flexibility.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EDependencies Directory:\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003EThe dependencies.d directory plays a crucial role when your process relies on another. To establish dependencies, create empty files named after the processes your task depends on. Multiple files can be created when a process depends on more than one other process.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003EThis directory structure simplifies the organization and execution of processes within your containerized environment, enhancing control and flexibility.\u003C\u002Fp\u003E\n\u003Cp\u003EFinally, it will look like below\u003C\u002Fp\u003E\n\u003Cdiv class=\"code-block with-line-numbers\" data-language=\"javascript\"\u003E\n\u003Cpre\u003E\u003Ccode spellcheck=\"false\"\u003Es6-overlay\n└── s6-rc.d\n    ├── init-nginx\n    │&nbsp;&nbsp; ├── dependencies.d\n    │&nbsp;&nbsp; │&nbsp;&nbsp; └── base\n    │&nbsp;&nbsp; ├── run\n    │&nbsp;&nbsp; ├── type\n    │&nbsp;&nbsp; └── up\n    ├── init-php82-fpm\n    │&nbsp;&nbsp; ├── dependencies.d\n    │&nbsp;&nbsp; │&nbsp;&nbsp; └── init-nginx\n    │&nbsp;&nbsp; ├── run\n    │&nbsp;&nbsp; ├── type\n    │&nbsp;&nbsp; └── up\n    ├── init-usermod\n    │&nbsp;&nbsp; ├── dependencies.d\n    │&nbsp;&nbsp; │&nbsp;&nbsp; └── init-nginx\n    │&nbsp;&nbsp; ├── run\n    │&nbsp;&nbsp; ├── type\n    │&nbsp;&nbsp; └── up\n    ├── svc-nginx\n    │&nbsp;&nbsp; ├── dependencies.d\n    │&nbsp;&nbsp; │&nbsp;&nbsp; ├── init-nginx\n    │&nbsp;&nbsp; │&nbsp;&nbsp; └── svc-php82-fpm\n    │&nbsp;&nbsp; ├── run\n    │&nbsp;&nbsp; └── type\n    ├── svc-php82-fpm\n    │&nbsp;&nbsp; ├── dependencies.d\n    │&nbsp;&nbsp; ├── run\n    │&nbsp;&nbsp; └── type\n    ├── svc-stdout\n    │&nbsp;&nbsp; ├── dependencies.d\n    │&nbsp;&nbsp; │&nbsp;&nbsp; ├── svc-nginx\n    │&nbsp;&nbsp; │&nbsp;&nbsp; └── svc-php82-fpm\n    │&nbsp;&nbsp; ├── run\n    │&nbsp;&nbsp; └── type\n    └── user\n        └── contents.d\n            ├── init-nginx\n            ├── init-php82-fpm\n            ├── init-usermod\n            ├── svc-nginx\n            ├── svc-php82-fpm\n            └── svc-stdout\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EInstalling S6\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003ES6-overlay is distributed in several tar files, each with a \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fjust-containers\u002Fs6-overlay?tab=readme-ov-file#installation\" target=\"_self\"\u003Edetailed description\u003C\u002Fa\u003E. The choice of which tar file to install depends on your specific requirements:\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003ETo utilize scripts with environment variables, you should install the symlinks tar files.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003EIf you are running daemons that cannot log to stderr to take advantage of the s6 logging infrastructure, and rely on the old syslog() mechanism, consider installing the syslog-overlay-noarch tar file.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003EHere is a sample Dockerfile code snippet to install S6-overlay in your Docker image,\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cstrong id=\"docs-internal-guid-304629f9-7fff-4b58-9703-30876d7ce914\"\u003E\u003C\u002Fstrong\u003EYou can find the full image \u003Ca href=\"https:\u002F\u002Fgithub.com\u002FImprowised\u002Fdocker-php-base\u002Ftree\u002Fs6-php82\" target=\"_self\"\u003Ehere\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\u003Cdiv class=\"code-block with-line-numbers\" data-language=\"bash\"\u003E\n\u003Cpre\u003E\u003Ccode spellcheck=\"false\"\u003EFROM alpine:3.18\n\nARG S6_OVERLAY_VERSION=\"3.1.5.0\"\nARG S6_OVERLAY_ARCH=\"x86_64\"\n\n# add s6 overlay\nADD https:\u002F\u002Fgithub.com\u002Fjust-containers\u002Fs6-overlay\u002Freleases\u002Fdownload\u002Fv${S6_OVERLAY_VERSION}\u002Fs6-overlay-noarch.tar.xz \u002Ftmp\nRUN tar -C \u002F -Jxpf \u002Ftmp\u002Fs6-overlay-noarch.tar.xz\nADD https:\u002F\u002Fgithub.com\u002Fjust-containers\u002Fs6-overlay\u002Freleases\u002Fdownload\u002Fv${S6_OVERLAY_VERSION}\u002Fs6-overlay-${S6_OVERLAY_ARCH}.tar.xz \u002Ftmp\nRUN tar -C \u002F -Jxpf \u002Ftmp\u002Fs6-overlay-${S6_OVERLAY_ARCH}.tar.xz\n\n# add s6 optional symlinks\nADD https:\u002F\u002Fgithub.com\u002Fjust-containers\u002Fs6-overlay\u002Freleases\u002Fdownload\u002Fv${S6_OVERLAY_VERSION}\u002Fs6-overlay-symlinks-noarch.tar.xz \u002Ftmp\nRUN tar -C \u002F -Jxpf \u002Ftmp\u002Fs6-overlay-symlinks-noarch.tar.xz\nADD https:\u002F\u002Fgithub.com\u002Fjust-containers\u002Fs6-overlay\u002Freleases\u002Fdownload\u002Fv${S6_OVERLAY_VERSION}\u002Fs6-overlay-symlinks-arch.tar.xz \u002Ftmp\nRUN tar -C \u002F -Jxpf \u002Ftmp\u002Fs6-overlay-symlinks-arch.tar.xz\nADD https:\u002F\u002Fgithub.com\u002Fjust-containers\u002Fs6-overlay\u002Freleases\u002Fdownload\u002Fv${S6_OVERLAY_VERSION}\u002Fsyslogd-overlay-noarch.tar.xz \u002Ftmp\nRUN tar -C \u002F -Jxpf \u002Ftmp\u002Fsyslogd-overlay-noarch.tar.xz\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\n\u003Cp dir=\"ltr\"\u003EIn a production environment, when running PHP applications, it becomes essential to employ PHP-FPM. This is due to PHP's single-threaded nature, which can limit its ability to efficiently handle heavy traffic while conserving memory and CPU resources. In such scenarios, S6-overlay proves to be an ideal choice for managing these applications. In this example, we will demonstrate how to set up PHP-FPM alongside Nginx using S6-overlay.&nbsp;\u003C\u002Fp\u003E\n\u003Ch3 dir=\"ltr\"\u003E\u003Cstrong\u003EInstalling PHP and Nginx\u003C\u002Fstrong\u003E\u003C\u002Fh3\u003E\n\u003Cp dir=\"ltr\"\u003ETo install PHP and Nginx, you can use a package manager. In our case, we are utilizing an Alpine base image, making it convenient to use the apt package manager.\u003C\u002Fp\u003E\n\u003Cdiv class=\"code-block with-line-numbers\" data-language=\"bash\"\u003E\n\u003Cpre\u003E\u003Ccode spellcheck=\"false\"\u003E# Install OS Dependencies\nRUN set -ex \\\n  && apk add --no-cache --virtual .build-deps \\\n    autoconf automake build-base python3 gmp-dev \\\n    curl \\\n    tar \\\n  && apk add --no-cache --virtual .run-deps \\\n    nodejs npm \\\n    # PHP and extensions\n    php82 php82-bcmath php82-ctype php82-curl php82-dom php82-exif php82-fileinfo \\\n    php82-fpm php82-gd php82-gmp php82-iconv php82-intl php82-mbstring \\\n    php82-mysqlnd php82-mysqli php82-opcache php82-openssl php82-pcntl php82-pecl-apcu php82-pdo php82-pdo_mysql \\\n    php82-phar php82-posix php82-session php82-simplexml php82-sockets php82-sqlite3 php82-tidy \\\n    php82-tokenizer php82-xml php82-xmlreader php82-xmlwriter php82-zip php82-pecl-xdebug php82-pecl-redis php82-soap php82-sodium php82-pdo_sqlite php82-pdo_pgsql php82-pgsql \\\n    # Other dependencies\n    mariadb-client sudo shadow \\\n    # Miscellaneous packages\n    bash ca-certificates dialog git libjpeg libpng-dev openssh-client vim wget shadow \\\n    # Nginx\n    nginx \\\n    # Create directories\n  && mkdir -p \u002Fetc\u002Fnginx \\\n    && mkdir -p \u002Frun\u002Fnginx \\\n    && mkdir -p \u002Fetc\u002Fnginx\u002Fsites-available \\\n    && mkdir -p \u002Fetc\u002Fnginx\u002Fsites-enabled \\\n    && rm -Rf \u002Fvar\u002Fwww\u002F* \\\n    && rm -Rf \u002Fetc\u002Fnginx\u002Fnginx.conf \\\n  # Composer\n  && wget https:\u002F\u002Fcomposer.github.io\u002Finstaller.sig -O - -q | tr -d '\\n' \u003E installer.sig \\\n    && php82 -r \"copy('https:\u002F\u002Fgetcomposer.org\u002Finstaller', 'composer-setup.php');\" \\\n    && php82 -r \"if (hash_file('SHA384', 'composer-setup.php') === file_get_contents('installer.sig')) { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;\" \\\n    && php82 composer-setup.php --install-dir=\u002Fusr\u002Fbin --filename=composer \\\n    && php82 -r \"unlink('composer-setup.php'); unlink('installer.sig');\" \\\n  # Cleanup\n  && apk del .build-deps\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\n\u003Cp dir=\"ltr\"\u003EHere we also installed Nodejs and npm as we are using this image for the Laravel app in which frontend files will be built using vite.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003ENow we need PHP-FPM and Nginx config.&nbsp; Generally, we kept in base image repo in the following directory structure\u003C\u002Fp\u003E\n\u003Cdiv class=\"code-block with-line-numbers\" data-language=\"javascript\"\u003E\n\u003Cpre\u003E\u003Ccode spellcheck=\"false\"\u003E└── rootfs\n    └── etc\n        ├── nginx\n        │&nbsp;&nbsp; ├── nginx.conf\n        │&nbsp;&nbsp; ├── sites-available\n        │&nbsp;&nbsp; │&nbsp;&nbsp; └── default.conf\n        │&nbsp;&nbsp; └── sites-enabled\n        ├── php82\n        │&nbsp;&nbsp; ├── conf.d\n        │&nbsp;&nbsp; ├── php-fpm.conf\n        │&nbsp;&nbsp; ├── php-fpm.d\n        │&nbsp;&nbsp; │&nbsp;&nbsp; └── www.conf\n        │&nbsp;&nbsp; └── php.ini\n        ├── s6-overlay\n        │&nbsp;&nbsp; └── s6-rc.d\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\n\u003Cp\u003ESo we added that using the below line in the Dockerfile\u003C\u002Fp\u003E\n\u003Cdiv class=\"code-block with-line-numbers\" data-language=\"javascript\"\u003E\n\u003Cpre\u003E\u003Ccode spellcheck=\"false\"\u003EADD rootfs \u002F\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\n\u003Ch3 dir=\"ltr\"\u003ESetting Users & Permissions in Your Image\u003C\u002Fh3\u003E\n\u003Cp dir=\"ltr\"\u003EBy default, Docker runs containers with root privileges. While this is suitable for local development, where developers may need to install new packages or edit configs, it is not recommended for production environments. Allowing anyone with access to the container to add packages or change permissions can pose security risks.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003ETo address this, it's advisable to run your processes as non-root users. To achieve this, we utilize the following script to set the User ID (UID) and Group ID (GID) of the \"nginx\" user and group. This script is included in the S6-overlay, ensuring that it runs as a one-shot task before the start of PHP-FPM and Nginx.\u003C\u002Fp\u003E\n\u003Cdiv class=\"code-block with-line-numbers\" data-language=\"javascript\"\u003E\n\u003Cpre\u003E\u003Ccode spellcheck=\"false\"\u003E#!\u002Fusr\u002Fbin\u002Fwith-contenv bash\n# shellcheck shell=bash\n\nUID=${UID:-911}\nGID=${GID:-911}\n\nusermod -u \"$UID\" nginx && groupmod -g \"$GID\" nginx\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\n\u003Cp\u003EIn that script, you can use the environment variables that you passed to your container.&nbsp;i.e\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Ccode class=\"inline\" spellcheck=\"false\"\u003Edocker run --name s6-app -e UID -e GID -p 8888:80 -v .:\u002Fvar\u002Fwww\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\n\u003Ch3 dir=\"ltr\"\u003EProcess Sequences\u003C\u002Fh3\u003E\n\u003Cp dir=\"ltr\"\u003EWhen you are running multiple processes, it becomes essential to ensure they run in a specific sequence. S6-overlay simplifies the process of defining and controlling the sequence in which these processes operate.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003EFor instance, if your Nginx process depends on an initialization process for Nginx, it's straightforward to establish the sequence, ensuring that the necessary processes start in the correct order.&nbsp;\u003C\u002Fp\u003E\n\u003Cdiv class=\"code-block with-line-numbers\" data-language=\"javascript\"\u003E\n\u003Cpre\u003E\u003Ccode spellcheck=\"false\"\u003Ecd svc-nginx\nmkdir dependencies.d\ntouch init-nginx svc-php82-fpm\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\n\u003Cp\u003ENow, \u003Ccode class=\"inline\" spellcheck=\"false\"\u003Esvc-nginx\u003C\u002Fcode\u003E will start only after \u003Ccode class=\"inline\" spellcheck=\"false\"\u003Einit-nginx\u003C\u002Fcode\u003E will be completed(as it is oneshot) and \u003Ccode class=\"inline\" spellcheck=\"false\"\u003Esvc-php82-fpm\u003C\u002Fcode\u003E will be in a running state.\u003C\u002Fp\u003E\n\u003Ch3\u003E\u003Cspan class=\"heading-content\"\u003EGraceful Shutdown\u003C\u002Fspan\u003E\u003C\u002Fh3\u003E\n\u003Cp dir=\"ltr\"\u003EA graceful shutdown is crucial for preserving the proper state of data and responses when a container exits. S6-overlay simplifies this process by supporting the use of variables like S6_SERVICES_GRACETIME and S6_KILL_GRACETIME to set a graceful exit time frame. Additionally, S6-overlay allows you to customize the exit code that the container returns upon termination. You can achieve this by creating a \"finish\" script in your process directory.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003EFor instance, in cases where you are running a non-critical process, you can use the finish script to specify a return status of 0. The inclusion of a finish script is optional but valuable when you need to modify the exit code or execute specific cleanup tasks during the container's shutdown.\u003C\u002Fp\u003E\n\u003Cdiv class=\"code-block with-line-numbers\" data-language=\"bash\"\u003E\n\u003Cpre\u003E\u003Ccode spellcheck=\"false\"\u003E#!\u002Fbin\u002Fsh\n\necho \"0\" \u003E \u002Frun\u002Fs6-linux-init-container-results\u002Fexitcode\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\n\u003Ch3\u003E\u003Cspan class=\"heading-content\"\u003EExtending Image\u003C\u002Fspan\u003E\u003C\u002Fh3\u003E\n\u003Cp dir=\"ltr\"\u003ES6-overlay's directory-based structure offers a straightforward method for extending this image from another base image. You can effortlessly create multiple images by adding additional processes without overwriting existing configurations in S6-overlay.\u003C\u002Fp\u003E\n\u003Cdiv class=\"code-block with-line-numbers\" data-language=\"javascript\"\u003E\n\u003Cpre\u003E\u003Ccode spellcheck=\"false\"\u003ECOPY svc-crond \u002Fetc\u002Fs6-overlay\u002Fs6-rc.d\u002Fsvc-crond\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\n\u003Ch3\u003E\u003Cspan class=\"heading-content\"\u003ESummary\u003C\u002Fspan\u003E\u003C\u002Fh3\u003E\n\u003Cp dir=\"ltr\"\u003EFor many years, we relied on Supervisor in our production environments. However, it became evident that the Supervisor could not address all the challenges we encountered.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003EThis is where S6-overlay emerged as a modern alternative, offering a comprehensive solution to our process management needs.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003ES6-overlay's versatility and ease of use make it a perfect choice, particularly for container images that require the execution of multiple processes.&nbsp;\u003C\u002Fp\u003E",tags:a,time_to_read:"4 minutes",user_created:{id:"c7ce7ff3-6577-4e14-9e95-71b2dd8d67c4",first_name:"Munir",last_name:"Khakhi",email:"munir@improwised.com",password:c,location:a,title:a,description:a,tags:a,avatar:"9f47a2fb-c13e-4cf3-99fa-7117ef11e769",language:a,theme:d,tfa_secret:a,status:e,role:f,token:a,last_access:"2023-11-08T11:54:20.706Z",last_page:"\u002Fcontent\u002Fpe_blog\u002F6",provider:g,external_identifier:a,auth_data:a,email_notifications:h},user_updated:{id:i,first_name:"Mansi",last_name:"Pancholi",email:"mansi@improwised.com",password:c,location:a,title:a,description:a,tags:a,avatar:"86701c80-2aba-48e2-90c1-d47cda4fdcd3",language:"en-US",theme:d,tfa_secret:a,status:e,role:f,token:a,last_access:"2023-11-09T07:25:11.792Z",last_page:"\u002Fcontent\u002Fpe_blog",provider:g,external_identifier:a,auth_data:a,email_notifications:h},image:{id:"70ad351f-5690-4055-b18b-62de85916a06",storage:"AMZ",filename_disk:"70ad351f-5690-4055-b18b-62de85916a06.jpg",filename_download:"S6 Image.jpg",title:"S6 Image",type:"image\u002Fjpeg",folder:"33b4de25-d0f2-4999-ba32-6883f9932c34",uploaded_by:i,uploaded_on:"2023-11-08T12:56:50.977Z",modified_by:a,modified_on:"2023-11-08T12:56:51.810Z",charset:a,filesize:"807681",width:j,height:j,duration:a,embed:a,description:a,location:a,tags:a,metadata:{}}},_img:{"/_ipx/h_55,f_png/img/plateform-engineers.png":"\u002F_nuxt\u002Fimage\u002F8686bc.png","/_ipx/f_png/https://data.improwised.com/assets/9f47a2fb-c13e-4cf3-99fa-7117ef11e769":"\u002F_nuxt\u002Fimage\u002F69505e.png","/_ipx/h_400,f_png/https://data.improwised.com/assets/70ad351f-5690-4055-b18b-62de85916a06":"\u002F_nuxt\u002Fimage\u002Fbda3f2.png","/_ipx/f_png,h_400/https://data.improwised.com/assets/70ad351f-5690-4055-b18b-62de85916a06":"\u002F_nuxt\u002Fimage\u002F939049.png"}}],fetch:{},mutations:[]}}(null,"S6-Overlay quickstart","**********","auto","active","5ef170ac-f2e9-4b93-a9ea-5c54fcf0fa40","default",true,"a8418846-5723-4563-86df-99615438090f",1500)));