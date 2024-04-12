__NUXT_JSONP__("/blog/continuous-delivery-using-git-ops-principles-with-flux-cd", (function(a,b,c,d){return {data:[{blog:{id:17,status:"published",sort:a,date_created:"2024-04-12T09:17:01.621Z",date_updated:a,slug:"continuous-delivery-using-git-ops-principles-with-flux-cd",title:b,description:"\u003Cp\u003E\u003Cstrong id=\"docs-internal-guid-dde85188-7fff-b52a-04ab-f992f6d9977a\"\u003ELearn how to implement GitOps principles in your software delivery pipeline using FluxCD for continuous delivery.\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E",seo_title:b,seo_description:"Learn how to implement GitOps principles in your software delivery pipeline using FluxCD for continuous delivery.",content:"\u003Cp dir=\"ltr\"\u003EContinuous Delivery (CD) automates the software release process, allowing teams to deliver features quickly and reliably. By combining CD practices with GitOps principles, developers can keep version control tools to manage their infrastructure and applications, ensuring consistent and predictable outcomes through automated pipelines.&nbsp;\u003C\u002Fp\u003E\n\u003Ch3 dir=\"ltr\"\u003EPrerequisites\u003C\u002Fh3\u003E\n\u003Cp dir=\"ltr\"\u003EBefore proceeding, ensure the following requirements are met:\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EA running Kubernetes cluster accessible to you. Refer to the \u003Ca href=\"https:\u002F\u002Fkubernetes.io\u002Fdocs\u002Fsetup\u002F\"\u003EKubernetes Docs\u003C\u002Fa\u003E for setup guidance.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EAccess to the \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fdigitalocean\u002FKubernetes-Starter-Kit-Developers\"\u003EStarter Kit\u003C\u002Fa\u003E repository.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EFamiliarity with Kubernetes interactions, including connecting to clusters using kubectl.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch2 dir=\"ltr\"\u003EReconciling Cluster State with Git Repository\u003C\u002Fh2\u003E\n\u003Cp dir=\"ltr\"\u003EFluxCD synchronizes the state of your infrastructure using Git as the source of truth, following GitOps principles. This process, called reconciliation, ensures applications match a desired state declaratively defined somewhere, such as a Git repository, Helm repository, or S3 bucket. FluxCD provides several ways to achieve reconciliation:\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EHelm Controller defined in a Git repository or S3 bucket.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EControllers containing necessary logic to fetch artifacts containing declarative state manifests and apply required changes to your cluster.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch2 dir=\"ltr\"\u003ESource CRD (Custom Resource Definition)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\u003C\u002Fh2\u003E\n\u003Cp dir=\"ltr\"\u003EFluxCD treats sources as a way of fetching artifacts containing state configuration. For example, it can pull data from Git repositories, Helm repositories, S3 buckets, etc.\u003C\u002Fp\u003E\n\u003Ch2 dir=\"ltr\"\u003EImplementing CD with FluxCD\u003C\u002Fh2\u003E\n\u003Cp dir=\"ltr\"\u003EThe Starter Kit uses the Git repository source type and HelmReleases for maintaining application state. Each chapter of the Starter Kit uses Helm to perform application deployment, making HelmReleases a natural choice for managing application lifecycle via the standard package manager for Kubernetes.\u003C\u002Fp\u003E\n\u003Ch3 dir=\"ltr\"\u003EManaging Helm Charts with FluxCD\u003C\u002Fh3\u003E\n\u003Cp dir=\"ltr\"\u003EFluxCD handles Helm charts through dedicated custom resource definitions (CRDs), specifically the HelmRepository and HelmRelease CRDs. These resources allow FluxCD to manage Helm repositories and fetch charts from remote locations, similar to running helm repo add \u003Cname\u003E \u003Curl\u003E and helm repo update.\u003Cbr\u003E\u003Cbr\u003E\u003C\u002Fp\u003E\n\u003Ch4 dir=\"ltr\"\u003ETypical Structure of a HelmRepository Manifest\u003Cbr\u003E\u003Cbr\u003E\u003C\u002Fh4\u003E\n\u003Cdiv class=\"code-block with-line-numbers\"\u003E\n\u003Cpre\u003E\u003Ccode\u003EapiVersion: source.toolkit.fluxcd.io\u002Fv1beta1\nkind: HelmRepository\nmetadata:\n  name: polymorphic-helm-source\n  namespace: flux-system\nspec:\n  interval: 10m0s\n  url: https:\u002F\u002Fimprowised.github.io\u002Fcharts\u002F\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch4 dir=\"ltr\"\u003ETypical Structure of a HelmRelease Manifest\u003Cbr\u003E\u003Cbr\u003E\u003C\u002Fh4\u003E\n\u003Cdiv class=\"code-block with-line-numbers\"\u003E\n\u003Cpre\u003E\u003Ccode\u003EapiVersion: helm.toolkit.fluxcd.io\u002Fv2beta1\nkind: HelmRelease\nmetadata:\n  name: nginx-app\n  namespace: flux-system\nspec:\n  chart:\n    spec:\n      chart: polymorphic-app\n      reconcileStrategy: ChartVersion\n      version: 1.3.0\n      sourceRef:\n        kind: HelmRepository\n        name: polymorphic-helm-source\n        namespace: flux-system\n  interval: 10m\u003C\u002Fcode\u003E\u003Ccode\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp dir=\"ltr\"\u003EEach Flux CD HelmRelease can override values via a values file or individually using key-value pairs.\u003C\u002Fp\u003E\n\u003Ch3 dir=\"ltr\"\u003EOverriding Values with FluxCD\u003C\u002Fh3\u003E\n\u003Cp dir=\"ltr\"\u003EFluxCD lets you override Helm values via two spec types:\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003E\u003Cspec.values\u003E: Allows overriding values inline as seen in a standard values.yaml file.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003E\u003Cspec.valuesFrom\u003E: Allows overriding values individually by using each key's fully qualified path from the values file.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp dir=\"ltr\"\u003ETypical usage of spec.values:\u003C\u002Fp\u003E\n\u003Cdiv class=\"code-block with-line-numbers\"\u003E\n\u003Cpre\u003E\u003Ccode\u003E...\nspec:\n  values:\n    fullnameOverride: \"nginx\"\n    # service template\n    serviceTemplate:\n      autoscaling: false\n      minReplicaCount: 1\n      maxReplicaCount: 1\n      env: []\n      envFrom: []\n    services:\n      - name: nginx-app\n        image:\n          repository: nginx\n          tag: 1.25.4-alpine\n        minReplicaCount: 1\n        ports:\n          - name: http\n            containerPort: 80\n            protocol: TCP\n\n...\u003C\u002Fcode\u003E\u003Ccode\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch3 dir=\"ltr\"\u003EDeploying FluxCD to Your Kubernetes Cluster\u003Ccode\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fh3\u003E\n\u003Cp dir=\"ltr\"\u003EDeploying FluxCD involves using its CLI tool to execute commands on your Kubernetes cluster. To begin, you must first authenticate yourself to your cluster and obtain a personal access token. You can verify that everything is working correctly by performing some sanity checks:\u003Ccode\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003Eflux check&nbsp;\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003EThe output of the flux check command will indicate whether or not the configuration files are correctly deployed on your cluster. If there are no differences, you should see a message similar to the following:\u003C\u002Fp\u003E\n\u003Cdiv class=\"code-block with-line-numbers\"\u003E\n\u003Cpre\u003E\u003Ccode\u003EChecking sync status...\nWaiting for API server to become ready...\nSyncing now...\nSuccessfully synced 0 resources\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp dir=\"ltr\"\u003EIf there are differences, the command will provide details about which resources need to be updated to match the desired state. In such cases, you may need to manually update the configuration files in the Git repository to reflect the changes you want to make.\u003Ccode\u003E\n\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003Eflux get all\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cdiv class=\"code-block with-line-numbers\"\u003E\n\u003Cpre\u003E\u003Ccode\u003ENAME                                          \tREVISION       \tSUSPENDED\tREADY\tMESSAGE                                     \nhelmrepository\u002Factions-runner-controller      \tsha256:6469d242\tFalse    \tTrue \tstored artifact: revision 'sha256:6469d242'\t\nhelmrepository\u002Fbitnami                        \tsha256:293ea2e0\tFalse    \tTrue \tstored artifact: revision 'sha256:293ea2e0'\t\nhelmrepository\u002Fpolymorphic-helm-source                        \t              \tFalse    \tTrue \tHelm repository is Ready  \n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"code-block with-line-numbers\"\u003E\n\u003Cpre\u003E\u003Ccode\u003ENAME                                                         \tREVISION\tSUSPENDED\tREADY\tMESSAGE                                                              \nhelmchart\u002Factions-runner-controller-actions-runner-controller\t0.21.0  \tFalse    \tTrue \tpulled 'actions-runner-controller' chart with version '0.21.0'      \t\nhelmchart\u002Fnginx-app                            \t1.3.0   \tFalse    \tTrue \tpulled 'polymorphic-app' chart with version '1.3.0'\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\nThis command displays information about the various components managed by FluxCD, allowing you to confirm that everything is configured correctly.\n\u003Ch3 dir=\"ltr\"\u003EConfiguring FluxCD to Deploy Applications\u003C\u002Fh3\u003E\n\u003Cp dir=\"ltr\"\u003ETo configure FluxCD to deploy applications, you need to create a HelmReleases resource that references the HelmRelease CRD. This HelmReleases resource will be responsible for deploying the application to your cluster.\u003C\u002Fp\u003E\n\u003Ch4 dir=\"ltr\"\u003ETypical Structure of a HelmRepository Manifest\u003C\u002Fh4\u003E\n\u003Cdiv class=\"code-block with-line-numbers\"\u003E\n\u003Cpre\u003E\u003Ccode\u003EapiVersion: kustomize.config.k8s.io\u002Fv1beta1\nkind: Kustomization\nmetadata:\n  name: my-app\n  namespace: flux-system\nspec:\n  resources:\n  - helmreleases\u002Fmy-app.yaml\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch3 dir=\"ltr\"\u003EDeploying Applications with FluxCD\u003C\u002Fh3\u003E\n\u003Cp dir=\"ltr\"\u003EOnce you have created the HelmReleases resource, you can deploy your application by applying the HelmReleases manifest to your cluster:\u003C\u002Fp\u003E\n\u003Cdiv class=\"code-block with-line-numbers\"\u003E\n\u003Cpre\u003E\u003Ccode\u003Ekubectl apply -f my-app.yaml\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp dir=\"ltr\"\u003EThis command deploys the application to your cluster, and FluxCD will automatically reconcile the application state with the desired state defined in the HelmRelease CRD.\u003C\u002Fp\u003E\n\u003Ch3 dir=\"ltr\"\u003EMonitoring and Troubleshooting FluxCD\u003C\u002Fh3\u003E\n\u003Cp dir=\"ltr\"\u003EFluxCD provides several tools for monitoring and troubleshooting your cluster. You can use the flux logs command to view logs for all FluxCD components:\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003Eflux logs\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003ETo demonstrate the usage of Flux logs command, let's assume we have Flux installed in our cluster with custom resources named monitoring-configs in the namespace flux-system. We want to see the logs for this specific custom resource for the last minute. Here's how we can use the flux logs command to achieve this:\u003C\u002Fp\u003E\n\u003Cbr\u003E\n\u003Cdiv class=\"code-block with-line-numbers\"\u003E\n\u003Cpre\u003E\u003Ccode\u003Eflux logs --kind=Helmrelease --name=nginx-app --namespace=flux-system\n2024-04-08T11:55:58.971Z info HelmRelease\u002Fnginx-app.flux-system - reconcilation finished in 110.570109ms, next run in 10m0s \n2024-04-08T12:05:59.167Z info HelmRelease\u002Fnginx-app.flux-system - reconcilation finished in 195.47602ms, next run in 10m0s \n2024-04-08T12:15:59.340Z info HelmRelease\u002Fnginx-app.flux-system - reconcilation finished in 170.867232ms, next run in 10m0s \n2024-04-08T12:25:59.451Z info HelmRelease\u002Fnginx-app.flux-system - reconcilation finished in 99.786584ms, next run in 10m0s\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"code-block with-line-numbers\"\u003E\n\u003Cpre\u003E\u003Ccode\u003Eflux logs --kind=Helmrepository --name=polymorphic-helm-source --namespace=flux-system\n2024-03-29T10:55:35.203Z info HelmRepository\u002Fpolymorphic-helm-source.flux-system - Discarding event, no alerts found for the involved object \n2024-03-29T12:55:35.985Z info HelmRepository\u002Fpolymorphic-helm-source.flux-system - Discarding event, no alerts found for the involved object \n2024-04-04T10:56:11.562Z info HelmRepository\u002Fpolymorphic-helm-source.flux-system - Discarding event, no alerts found for the involved object \n2024-04-08T04:56:35.119Z info HelmRepository\u002Fpolymorphic-helm-source.flux-system - artifact up-to-date with remote revision: 'sha256:61d24125f529fff38a042f443e87ddd5ae2775a2af674e29926e0ca6e75e525b' \n2024-04-08T05:56:35.450Z info HelmRepository\u002Fpolymorphic-helm-source.flux-system - artifact up-to-date with remote revision: 'sha256:61d24125f529fff38a042f443e87ddd5ae2775a2af674e29926e0ca6e75e525b'\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp dir=\"ltr\"\u003EThis output shows us the logs related to our monitoring-configs custom resource in the flux-system namespace for the last minute (since 1m ago). It includes information about the status of the reconciliation process, such as when all dependencies were ready, when server-side apply was completed, and when the reconciliation finished. By analyzing these logs, we can gain insights into how our Flux components are operating and troubleshoot any issues that might arise.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong id=\"docs-internal-guid-56fe7310-7fff-c141-6c9c-f2cbd03382bd\"\u003Eflux get all\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cdiv class=\"code-block with-line-numbers\"\u003E\n\u003Cpre\u003E\u003Ccode\u003ENAME                                          \tREVISION       \tSUSPENDED\tREADY\tMESSAGE                                     \nhelmrepository\u002Factions-runner-controller      \tsha256:6469d242\tFalse    \tTrue \tstored artifact: revision 'sha256:6469d242'\t\nhelmrepository\u002Fbitnami                        \tsha256:293ea2e0\tFalse    \tTrue \tstored artifact: revision 'sha256:293ea2e0'\t\nhelmrepository\u002Fpolymorphic-helm-source                        \t              \tFalse    \tTrue \tHelm repository is Ready\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cdiv class=\"code-block with-line-numbers\"\u003E\n\u003Cpre\u003E\u003Ccode\u003ENAME                                                         \tREVISION\tSUSPENDED\tREADY\tMESSAGE                                                              \nhelmchart\u002Factions-runner-controller-actions-runner-controller\t0.21.0  \tFalse    \tTrue \tpulled 'actions-runner-controller' chart with version '0.21.0'      \t\nhelmchart\u002Fnginx-app                            \t1.3.0   \tFalse    \tTrue \tpulled 'polymorphic-app' chart with version '1.3.0'\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp dir=\"ltr\"\u003EThis command displays information about the various components managed by FluxCD, allowing you to confirm that everything is configured correctly.\u003C\u002Fp\u003E\n\u003Ch3 dir=\"ltr\"\u003EConclusion\u003C\u002Fh3\u003E\n\u003Cp dir=\"ltr\"\u003EBy following the steps outlined in this guide, you have successfully implemented Continuous Delivery using GitOps principles with FluxCD. You have learned how to manage Helm repositories and charts, reconcile your kubernetes cluster state with a Git repository, and use FluxCD to automate your infrastructure management and application deployment processes. With FluxCD installed and configured, you can now focus on delivering high-quality software while ensuring consistent and predictable outcomes through automated pipelines.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003EWebhooks allow for immediate deployment of new versions when certain events occur. They work by sending an HTTP POST request to a specified URL whenever a specific event happens, triggering the deployment process.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003EThe FluxCD Notification Controller is responsible for handling both incoming and outgoing events within the GitOps toolkit ecosystem. It serves two primary functions:\u003C\u002Fp\u003E\n\u003Col\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EHandling incoming events: The controller receives events from external systems such as GitHub, GitLab, Bitbucket, Harbor, Jenkins, and others. These events are related to source changes that need to be notified to the GitOps Toolkit controllers.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EDispatching outgoing events: The Notification Controller also handles events emitted by the GitOps Toolkit controllers (source, kustomize, helm) and dispatches them to external systems like Slack, Microsoft Teams, Discord, and others based on event severity and involved objects. This ensures that the appropriate teams are notified about the status of their GitOps pipelines.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EHere is an example of notification controller:\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003ESlack notification of release successful:\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cimg src=\"\u002F_nuxt\u002Fimage\u002F1862e4.png\" alt=\"Helm Controller Notification\"\u003E\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003ESlack notification of error:\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cimg src=\"\u002F_nuxt\u002Fimage\u002F7d7971.png\" alt=\"Fluxcd Error\"\u003E\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E",tags:a,time_to_read:"6 minutes",user_created:{id:c,first_name:"Angita",last_name:"Shah",email:"angita.shah@improwised.com",password:"**********",location:a,title:"SEO Specialist",description:a,tags:a,avatar:"20d037d1-41ee-4efd-b034-1350a3ce336d",language:a,theme:"auto",tfa_secret:a,status:"active",role:"5ef170ac-f2e9-4b93-a9ea-5c54fcf0fa40",token:a,last_access:"2024-04-12T09:11:27.657Z",last_page:"\u002Fcontent\u002Fpe_blog",provider:"default",external_identifier:a,auth_data:a,email_notifications:true},user_updated:a,image:{id:"3c3f66e6-894c-4504-bfc9-6c98cec3dc68",storage:"AMZ",filename_disk:"3c3f66e6-894c-4504-bfc9-6c98cec3dc68.png",filename_download:"Untitled design (1).png",title:"Untitled Design (1)",type:"image\u002Fpng",folder:"33b4de25-d0f2-4999-ba32-6883f9932c34",uploaded_by:c,uploaded_on:"2024-04-12T09:16:54.112Z",modified_by:a,modified_on:"2024-04-12T09:16:54.515Z",charset:a,filesize:"87322",width:d,height:d,duration:a,embed:a,description:a,location:a,tags:a,metadata:{}}},_img:{"/_ipx/f_png/https://data.improwised.com/assets/c3f7da29-482e-4c42-a835-b7a63c4a3740%3Fwidth=638%26height=629":"\u002F_nuxt\u002Fimage\u002F1862e4.png","/_ipx/f_png/https://data.improwised.com/assets/14bf74ce-4511-4b3e-879c-59edc6faa5e6%3Fwidth=658%26height=378":"\u002F_nuxt\u002Fimage\u002F7d7971.png","/_ipx/f_png/img/plateform-engineers.png":"\u002F_nuxt\u002Fimage\u002Fe7b705.png","/_ipx/f_png,s_68x55/img/plateform-engineers.png":"\u002F_nuxt\u002Fimage\u002F418082.png","/_ipx/f_png,s_32x40/https://data.improwised.com/assets/20d037d1-41ee-4efd-b034-1350a3ce336d":"\u002F_nuxt\u002Fimage\u002Fa07868.png","/_ipx/h_400,f_png/https://data.improwised.com/assets/3c3f66e6-894c-4504-bfc9-6c98cec3dc68":"\u002F_nuxt\u002Fimage\u002F4805b2.png","/_ipx/f_png,h_400/https://data.improwised.com/assets/3c3f66e6-894c-4504-bfc9-6c98cec3dc68":"\u002F_nuxt\u002Fimage\u002Ff87a75.png"}}],fetch:{},mutations:[]}}(null,"Continuous Delivery using GitOps Principles with FluxCD","f6ae4b64-c3c4-4f35-8b41-9f48088de4b1",1190)));