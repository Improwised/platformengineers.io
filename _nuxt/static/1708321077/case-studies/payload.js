__NUXT_JSONP__("/case-studies", (function(a,b,c,d,e,f,g,h,i,j){return {data:[{caseStudies:[{id:b,status:"published",sort:a,date_created:"2023-01-13T08:40:06.000Z",date_updated:"2024-02-19T05:36:14.615Z",title:c,description:c,seo_title:"Infrastructure Consolidation with Kubernetes",seo_description:"Social media platform used Kubernetes to cut costs 70%, boost performance & consolidate infra. | #PlatformEngineers",slug:"from-complexity-to-simplicity-case-study-of-infrastructure-consolidation",client_info_title:a,client_info_description:"\u003Ch1\u003E\u003Cspan style=\"font-size: 22px;\"\u003ECost Conquest: Social Platform's Cloud Optimization\u003C\u002Fspan\u003E\u003C\u002Fh1\u003E\n\u003Cp\u003E\u003Cspan style=\"font-size: 18px;\"\u003EA collaborative social media platform with a large user base faced performance and cost issues due to its complex Infrastructure. The company deployed the application on Amazon ECS as containers, while the database was hosted on RDS in two separate AWS regions for staging and production. However, this resulted in latency issues and distrust in the deployment process. Additionally, maintaining the infrastructure in both regions was expensive, and the company needed to reduce costs.\u003C\u002Fspan\u003E\u003C\u002Fp\u003E",goal_title:"Challenge",goal_description:"\u003Cp\u003E\u003Cspan style=\"font-size: 18px;\"\u003EConsolidating infrastructure and simplifying deployment can be challenging, requiring careful planning to avoid data loss and downtime during migration. Managing a self-managed Kubernetes cluster can also be complex,&nbsp; and incurring additional costs. Consolidating environments into one region can lead to a single point of failure, highlighting the importance of disaster recovery and business continuity plans. Despite these challenges, a well-planned strategy can result in significant cost reductions and other benefits.\u003C\u002Fspan\u003E\u003C\u002Fp\u003E",solution_title:"Solution",solution_description:"\u003Cp style=\"font-size: 18px;\"\u003E\u003Cspan style=\"font-weight: 400;\"\u003EWe approached this problem by consolidating its infrastructure and automating its deployment process. We suggested and adopted the following steps to achieve its objective:\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp style=\"font-size: 18px;\"\u003E\u003Cstrong\u003EMigration to Kubernetes: \u003C\u002Fstrong\u003E\u003Cspan style=\"font-weight: 400;\"\u003EWe migrated its application to a single self-managed Kubernetes cluster in one AWS region, resulting in easier automation, simplified infrastructure, and reduced ongoing maintenance.\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp style=\"font-size: 18px;\"\u003E\u003Cstrong\u003EConsolidation of Environments :\u003C\u002Fstrong\u003E\u003Cspan style=\"font-weight: 400;\"\u003E To address their cost concerns, We have implemented two distinct infrastructure changes. First, consolidated their two Amazon Elastic File System (EFS) instances into a single region. Second, consolidated their two Amazon Relational Database Service (RDS) servers into one. Additionally, they moved all of their applications to a single self-managed Kubernetes cluster within the same region.\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp style=\"font-size: 18px;\"\u003E\u003Cstrong\u003EImplementation of CI\u002FCD:\u003C\u002Fstrong\u003E\u003Cspan style=\"font-weight: 400;\"\u003E The company had an existing CI pipeline in Jenkins that was causing a lot of problems, including being injected with crypto malware and requiring new user additions every time the dev team changed. To solve these issues, We have moved the pipeline to Drone CI, which provided container-based pipelines and Github-based login access. This move improved reliability and consistency, resulting in reduced downtime and maintenance costs. CI\u002FCD alerting was also added to Slack, providing developers with immediate notifications of any pipeline issues. To further enhance the infrastructure, namespaces were utilized to separate the staging and production environments within a single Kubernetes cluster.\u003C\u002Fspan\u003E\u003C\u002Fp\u003E",outcome_title:"Results",outcome_description:"\u003Cp\u003E\u003Cspan style=\"font-weight: 400;\"\u003EThe implementation of the above steps resulted in the following benefits for Company:\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cspan style=\"font-weight: 400;\"\u003E\u003Cstrong\u003EReduced Monthly Recurring Cost \u003C\u002Fstrong\u003E: As a result of consolidating infrastructure and simplifying deployment, a company was able to reduce their monthly recurring infrastructure cost by approximately 70%.\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cspan style=\"font-weight: 400;\"\u003E\u003Cstrong\u003EZero down time in migration\u003C\u002Fstrong\u003E : During the migration process, one of the challenges that Company faced was ensuring zero downtime as they had a large user base. However, we were able to achieve this through careful planning and execution during the database replication phase.\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cspan style=\"font-weight: 400;\"\u003E\u003Cstrong\u003EStreamlined Infrastructure through Automation\u003C\u002Fstrong\u003E : By consolidating their infrastructure and migrating to Kubernetes, the company was able to simplify its processes and focus on its core business. This automation and simplification led to a significant reduction in ongoing maintenance costs and improved reliability of their deployment process.\u003C\u002Fspan\u003E\u003C\u002Fp\u003E",conclusion_title:a,conclusion_description:"",technologies_title:d,user_created:{id:e,first_name:"Improwised",last_name:d,email:"admin.directus@improwised.dev",password:f,location:a,title:a,description:a,tags:a,avatar:a,language:"en-US",theme:g,tfa_secret:a,status:h,role:"9d68ca39-0460-48bc-a533-6b999e303740",token:a,last_access:"2024-02-16T15:00:10.701Z",last_page:"\u002Fsettings\u002Fdata-model\u002Fpe_industry",provider:i,external_identifier:a,auth_data:a,email_notifications:j},user_updated:{id:"f6ae4b64-c3c4-4f35-8b41-9f48088de4b1",first_name:"Angita",last_name:"Shah",email:"angita.shah@improwised.com",password:f,location:a,title:"SEO Specialist",description:a,tags:a,avatar:"1ae18609-c2a2-4f75-b2e9-d80a75615c64",language:a,theme:g,tfa_secret:a,status:h,role:"5ef170ac-f2e9-4b93-a9ea-5c54fcf0fa40",token:a,last_access:"2024-02-19T05:37:10.334Z",last_page:"\u002Fcontent\u002Fpe_pages_seo\u002F3",provider:i,external_identifier:a,auth_data:a,email_notifications:j},image:{id:"3af59aeb-af00-4a48-a6b5-62aa3ed18840",storage:"AMZ",filename_disk:"3af59aeb-af00-4a48-a6b5-62aa3ed18840.png",filename_download:"c5 (1).png",title:"C5 (1)",type:"image\u002Fpng",folder:"7f093bbf-b7d0-4917-82d2-ad352c072634",uploaded_by:e,uploaded_on:"2024-02-14T13:13:53.953Z",modified_by:a,modified_on:"2024-02-14T13:13:54.256Z",charset:a,filesize:"39275",width:1000,height:884,duration:a,embed:a,description:a,location:a,tags:a,metadata:{}},tags:[{id:b,pe_case_studies_id:b,pe_case_studies_tags_id:b}],technologies:[{id:2,pe_case_studies_id:b,directus_files_id:"29f69fe3-d777-489a-91cf-b0ce6417c825"},{id:3,pe_case_studies_id:b,directus_files_id:"d7c079c6-8637-47b7-be8e-870db3f7d47c"},{id:6,pe_case_studies_id:b,directus_files_id:"129d7e2c-e476-4e57-8bf2-ff2f85a99970"},{id:10,pe_case_studies_id:b,directus_files_id:"8291ea93-59de-454c-a5d7-7ec3c677a8a4"},{id:11,pe_case_studies_id:b,directus_files_id:"63f140f4-d091-4efe-a081-ed96cafe4bb9"},{id:12,pe_case_studies_id:b,directus_files_id:"8001cea2-e01c-4520-8b8c-9014d3a35085"},{id:13,pe_case_studies_id:b,directus_files_id:"4372ad28-3150-4778-82b9-9cf892dadd7a"}]}],_img:{"/_ipx/f_png,s_68x55/img/plateform-engineers.png":"\u002F_nuxt\u002Fimage\u002F418082.png","/_ipx/h_400,f_png/img/c4.svg":"\u002F_nuxt\u002Fimage\u002F381937.png","/_ipx/s_300x300/https://data.improwised.com/assets/3af59aeb-af00-4a48-a6b5-62aa3ed18840":"\u002F_nuxt\u002Fimage\u002F611136[ext]","/_ipx/f_png,h_400/img/c4.svg":"\u002F_nuxt\u002Fimage\u002F3e9c2a.png"}}],fetch:{},mutations:[]}}(null,1,"From Complexity to Simplicity: A Cost Reduction Case Study through Infrastructure Consolidation and Automation for a Collaborative Social Media Platform","Technologies","8efd2782-260e-4047-a92d-b289479e1581","**********","auto","active","default",true)));