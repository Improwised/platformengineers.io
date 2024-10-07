__NUXT_JSONP__("/blog/debugging-open-tofu-with-remote-execution", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return {data:[{blog:{id:b,status:"published",sort:17,date_created:"2024-05-30T10:55:00.000Z",date_updated:"2024-06-05T05:55:45.094Z",slug:"debugging-open-tofu-with-remote-execution",title:g,description:"\u003Cp dir=\"ltr\"\u003ERemote execution is a feature of OpenTofu that allows you to execute commands on a remote machine instead of your local machine. This can be useful when you need to debug issues that are specific to the remote environment, such as permissions or network connectivity.\u003C\u002Fp\u003E",seo_title:g,seo_description:"Remote execution is a feature of OpenTofu that allows you to execute commands on a remote machine instead of your local machine.",content:"\u003Cp dir=\"ltr\"\u003EOpenTofu is an open-source fork of Terraform, a popular infrastructure-as-code (IaC) tool. It was created in response to HashiCorp's decision to change the license for Terraform from the Mozilla Public License (MPL) to the Business Source License (BSL) in August 2023. This change restricted the use of Terraform in production environments, leading to concerns among the open-source community. OpenTofu is a drop-in replacement for Terraform v1.6.x and is fully backward compatible with all prior versions. It employs a declarative syntax similar to the Hashicorp Configuration Language (HCL) and supports the same workflow as Terraform, including the \u003Cem\u003Ewrite -\u003E plan -\u003E apply\u003C\u002Fem\u003E process.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003EOpenTofu is committed to being truly open source, community-driven, impartial, layered and modular, and backward compatible. The project aims to provide a reliable and accessible IaC tool for the tech community, ensuring that the essential building blocks of the modern internet remain truly open source. We are committed to using OpenTofu as our IaC tool of choice, leveraging its open-source nature and community-driven development to ensure the long-term sustainability and reliability of our infrastructure deployments.&nbsp;\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003ERemote execution is a feature of OpenTofu that allows you to execute commands on a remote machine instead of your local machine. This can be useful when you need to debug issues that are specific to the remote environment, such as permissions or network connectivity.\u003C\u002Fp\u003E\n\u003Ch3 dir=\"ltr\"\u003E\u003Cstrong\u003EHow Remote Execution Works in OpenTofu\u003C\u002Fstrong\u003E\u003C\u002Fh3\u003E\n\u003Cp dir=\"ltr\"\u003ETo use remote execution, you will need to have a remote machine that is running the OpenTofu binary and has access to the necessary resources. You can use any machine that meets these requirements, such as a virtual machine or a remote server.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003EOnce you have a remote machine set up, you can use the OpenTofu CLI to execute commands on it. The following command will execute the OpenTofu plan command on the remote machine:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Eopentofu plan -out=tfplan -remote=ssh:\u002F\u002Fuser@remote_machine_ip\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp dir=\"ltr\"\u003EThis command will connect to the remote machine using SSH and execute the OpenTofu plan command. The \u003Ccode\u003E-out\u003C\u002Fcode\u003E flag specifies the name of the plan file that will be generated, and the \u003Ccode\u003E-remote\u003C\u002Fcode\u003Eflag specifies the remote machine to connect to.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003EYou can also use the \u003Ccode\u003E-var\u003C\u002Fcode\u003E flag to pass variables to the remote machine. For example, the following command will pass the \u003Ccode\u003Eaws_access_key\u003C\u002Fcode\u003E and \u003Ccode\u003Eaws_secret_key\u003C\u002Fcode\u003E variables to the remote machine:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Eopentofu plan -out=tfplan -remote=ssh:\u002F\u002Fuser@remote_machine_ip -var 'aws_access_key=\u003C&nbsp;access_key&nbsp;\u003E' -var 'aws_secret_key=\u003C&nbsp;secret_key&nbsp;\u003E'\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp dir=\"ltr\"\u003EOnce the plan command has completed, you can use the OpenTofu apply command to apply the changes to the remote environment. The following command will apply the changes specified in the \u003Ccode\u003Etfplan\u003C\u002Fcode\u003E file:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Eopentofu apply tfplan -remote=ssh:\u002F\u002Fuser@remote_machine_ip\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp dir=\"ltr\"\u003EIf you encounter any errors during the deployment process, you can use the OpenTofu output command to view the output of the remote machine.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EThe following command will display the output of the&nbsp;\u003Ccode\u003Eaws_instance\u003C\u002Fcode\u003E resource:\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Eopentofu output aws_instance_public_ip -remote=ssh:\u002F\u002Fuser@remote_machine_ip\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp dir=\"ltr\"\u003EYou can also use the OpenTofu state command to view the current state of the remote environment.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EThe following command will display the current state of the&nbsp;\u003Ccode\u003Eaws_instance\u003C\u002Fcode\u003E resource:\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Eopentofu state show aws_instance.example -remote=ssh:\u002F\u002Fuser@remote_machine_ip\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp dir=\"ltr\"\u003EIf you need to make changes to the remote environment, you can use the OpenTofu console command to open an interactive console session on the remote machine.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EThe following command will open a console session on the remote machine:\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Eopentofu console -remote=ssh:\u002F\u002Fuser@remote_machine_ip\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003EOnce you are in the console session, you can use the OpenTofu CLI to make changes to the remote environment. \u003Cstrong\u003EFor example, the following command will create a new AWS instance:\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Eaws_instance.example = aws_instance.new(\nami           = \"ami-0c94855ba95c574c8\",\ninstance_type = \"t2.micro\",\nsubnet_id     = \"subnet-0123456789abcdef0\",\n)\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003EWhen you are finished making changes, you can use the OpenTofu apply command to apply the changes to the remote environment.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EHere is an example of a OpenTofu configuration file that uses remote execution to deploy an AWS instance:\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Eprovider \"aws\" {\n region = \"us-west-2\"\n}\n\n\nresource \"aws_instance\" \"example\" {\n ami           = \"ami-0c94855ba95c574c8\"\n instance_type = \"t2.micro\"\n subnet_id     = \"subnet-0123456789abcdef0\"\n\n\n provisioner \"remote-exec\" {\n   inline = [\n     \"sudo yum update -y\",\n     \"sudo amazon-linux-extras install -y nginx1\",\n     \"sudo service nginx start\",\n   ]\n }\n}\n\n\noutput \"aws_instance_public_ip\" {\n value = aws_instance.example.public_ip\n }\n}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E\u003Cstrong\u003E&nbsp;\u003C\u002Fstrong\u003EThis configuration file uses the \u003Ccode\u003Eremote-exec\u003C\u002Fcode\u003E provisioner to execute commands on the remote AWS instance after it has been created. The \u003Ccode\u003Einline\u003C\u002Fcode\u003E argument specifies a list of commands to execute, which in this case updates the package manager, installs Nginx, and starts the Nginx service.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003ETo deploy this configuration using remote execution, you can use the following command:\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Eopentofu apply -out=tfplan -remote=ssh:\u002F\u002Fuser@remote_machine_ip\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp dir=\"ltr\"\u003EThis command will connect to the remote machine using SSH and execute the OpenTofu apply command. The \u003Ccode\u003E-out\u003C\u002Fcode\u003E flag specifies the name of the plan file that will be generated, and the \u003Ccode\u003E-remote\u003C\u002Fcode\u003E flag specifies the remote machine to connect to.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EOnce the deployment has completed, you can use the OpenTofu output command to view the public IP address of the AWS instance:\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Eopentofu output aws_instance_public_ip -remote=ssh:\u002F\u002Fuser@remote_machine_ip\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp dir=\"ltr\"\u003EThis will display the public IP address of the AWS instance, which you can use to access the Nginx service\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EHere is an example of a OpenTofu configuration file that uses the null_resource resource to execute commands on the remote machine during the deployment process:\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Eprovider \"aws\" {\n region = \"us-west-2\"\n}\n\n\nresource \"aws_instance\" \"example\" {\n ami           = \"ami-0c94855ba95c574c8\"\n instance_type = \"t2.micro\"\n subnet_id     = \"subnet-0123456789abcdef0\"\n}\n\n\nresource \"null_resource\" \"example\" {\n provisioner \"remote-exec\" {\n   inline = [\n     \"sudo yum update -y\",\n     \"sudo amazon-linux-extras install -y nginx1\",\n     \"sudo service nginx start\",\n   ]\n\n\n   connection {\n     type        = \"ssh\"\n     user        = \"ec2-user\"\n     host        = aws_instance.example.public_ip\n     private_key = file(\"~\u002F.ssh\u002Fid_rsa\")\n   }\n }\n}\n\n\noutput \"aws_instance_public_ip\" {\n value = aws_instance.example.public_ip\n}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E\u003Cstrong\u003E&nbsp;\u003C\u002Fstrong\u003EThis configuration file uses the \u003Ccode\u003Enull_resource\u003C\u002Fcode\u003E resource to execute commands on the remote AWS instance during the deployment process. The \u003Ccode\u003Eprovisioner\u003C\u002Fcode\u003E block specifies the commands to execute, and the connection block specifies the \u003Ccode\u003Econnection\u003C\u002Fcode\u003E details for the remote machine.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EHere are some best practices for using remote execution in OpenTofu:\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EUse the \u003Ccode\u003Eremote-exec\u003C\u002Fcode\u003E provisioner for one-time setup tasks, such as installing packages or configuring services.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EUse the \u003Ccode\u003Enull_resource\u003C\u002Fcode\u003E resource for tasks that need to be executed multiple times during the deployment process, such as running scripts or updating configuration files.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EUse the \u003Ccode\u003Econnection\u003C\u002Fcode\u003E block to specify the connection details for the remote machine, such as the user name, host name, and private key.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EUse the \u003Ccode\u003Einline\u003C\u002Fcode\u003E argument to specify a list of commands to execute on the remote machine.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EUse the \u003Ccode\u003Einterpreter\u003C\u002Fcode\u003E argument to specify the command interpreter to use on the remote machine, such as \u003Ccode\u003E\u002Fbin\u002Fbash\u003C\u002Fcode\u003E or \u003Ccode\u003E\u002Fbin\u002Fsh\u003C\u002Fcode\u003E.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EUse the \u003Ccode\u003Eworking_dir\u003C\u002Fcode\u003E argument to specify the working directory for the commands on the remote machine.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EUse the \u003Ccode\u003Eenvironment\u003C\u002Fcode\u003E argument to specify environment variables for the commands on the remote machine.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EUse the \u003Ccode\u003Etimeouts\u003C\u002Fcode\u003E argument to specify the maximum amount of time to wait for the commands to complete on the remote machine.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp dir=\"ltr\"\u003EBy following these best practices, you can ensure that your OpenTofu configurations are robust and reliable, and that you can effectively debug issues that may arise during the deployment process.\u003C\u002Fp\u003E\n\u003Ch3 dir=\"ltr\"\u003E\u003Cstrong\u003EConclusion\u003C\u002Fstrong\u003E\u003C\u002Fh3\u003E\n\u003Cp dir=\"ltr\"\u003EOpenTofu remote execution is a powerful feature that allows users to execute scripts or shell commands on remote machines as part of resource creation or deletion. However, it should be used with caution and only as a last resort. The main reason for this is that provisioners add considerable complexity and uncertainty to OpenTofu usage, making it difficult to model the actions of provisioners as part of a plan. Successful use of provisioners requires coordinating more details than OpenTofu usage usually requires, such as direct network access to servers, issuing OpenTofu credentials to log in, and ensuring that all necessary external software is installed.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003EMoreover, OpenTofu provisioners can be slow and may cause performance issues, especially when dealing with large and highly connected configuration graphs or resources with very large numbers of instances. This can lead to long plan times, making it troublesome for large-scale deployments.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003EAnother complexity of OpenTofu remote execution is that it lacks idempotence, meaning that it will only run \"file\", \"remote-exec\", or \"local-exec\" on resources once. If the commands in a \"remote-exec\" are changed or a file from the provisioner \"file\" is updated, OpenTofu will not re-run the provisioner automatically. This can be a drawback compared to other tools like Ansible, which can achieve the same tasks as OpenTofu but with idempotence.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003EIn conclusion, while OpenTofu remote execution can be a useful feature, it should be used judiciously and with careful consideration of its complexities. It is recommended to use provisioners only when there is no other option and to explore alternative solutions that can provide more efficient and idempotent infrastructure provisioning.\u003C\u002Fp\u003E",tags:a,time_to_read:"5 mins",user_created:{id:c,first_name:d,last_name:e,email:h,password:i,location:a,title:j,description:a,tags:a,avatar:f,language:a,tfa_secret:a,status:k,role:l,token:a,last_access:m,last_page:n,provider:o,external_identifier:a,auth_data:a,email_notifications:p,appearance:a,theme_dark:a,theme_light:a,theme_light_overrides:a,theme_dark_overrides:a},user_updated:{id:c,first_name:d,last_name:e,email:h,password:i,location:a,title:j,description:a,tags:a,avatar:f,language:a,tfa_secret:a,status:k,role:l,token:a,last_access:m,last_page:n,provider:o,external_identifier:a,auth_data:a,email_notifications:p,appearance:a,theme_dark:a,theme_light:a,theme_light_overrides:a,theme_dark_overrides:a},image:{id:"0736c072-8ebd-43ea-b349-b2132a79ac68",storage:"AMZ",filename_disk:"0736c072-8ebd-43ea-b349-b2132a79ac68.png",filename_download:"opentofu (1).png",title:"Opentofu (1)",type:"image\u002Fpng",folder:"33b4de25-d0f2-4999-ba32-6883f9932c34",uploaded_by:c,created_on:q,modified_by:a,modified_on:"2024-04-26T11:24:38.247Z",charset:a,filesize:"110917",width:r,height:r,duration:a,embed:a,description:a,location:a,tags:a,metadata:{},focal_point_x:a,focal_point_y:a,tus_id:a,tus_data:a,uploaded_on:q},authors:[{id:22,pe_blog_id:b,directus_users_id:{first_name:"Satish",last_name:"Annavar ",avatar:"33d28adb-eb7a-47f1-adc1-2233c7f06711"}},{id:23,pe_blog_id:b,directus_users_id:{first_name:d,last_name:e,avatar:f}}]},_img:{"/_ipx/f_png/img/plateform-engineers.png":"\u002F_nuxt\u002Fimage\u002Fe7b705.png","/_ipx/f_png,s_68x55/img/plateform-engineers.png":"\u002F_nuxt\u002Fimage\u002F418082.png","/_ipx/f_png,s_32x40/https://data.improwised.com/assets/33d28adb-eb7a-47f1-adc1-2233c7f06711":"\u002F_nuxt\u002Fimage\u002F32d461.png","/_ipx/f_png,s_32x40/https://data.improwised.com/assets/20d037d1-41ee-4efd-b034-1350a3ce336d":"\u002F_nuxt\u002Fimage\u002Fa07868.png","/_ipx/h_400,f_png/https://data.improwised.com/assets/0736c072-8ebd-43ea-b349-b2132a79ac68":"\u002F_nuxt\u002Fimage\u002Fbd64f5.png","/_ipx/f_png,h_400/https://data.improwised.com/assets/0736c072-8ebd-43ea-b349-b2132a79ac68":"\u002F_nuxt\u002Fimage\u002Fec8a9d.png"}}],fetch:{},mutations:[]}}(null,19,"f6ae4b64-c3c4-4f35-8b41-9f48088de4b1","Angita","Shah","20d037d1-41ee-4efd-b034-1350a3ce336d","Debugging OpenTofu with Remote Execution","angita.shah@improwised.com","**********","SEO Specialist","active","5ef170ac-f2e9-4b93-a9ea-5c54fcf0fa40","2024-10-07T08:08:00.249Z","\u002Fcontent\u002Fpe_blog\u002F28","default",true,"2024-04-26T11:24:37.567Z",1190)));