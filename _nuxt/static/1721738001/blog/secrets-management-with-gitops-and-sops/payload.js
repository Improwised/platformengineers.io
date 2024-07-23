__NUXT_JSONP__("/blog/secrets-management-with-gitops-and-sops", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return {data:[{blog:{id:26,status:"published",sort:a,date_created:"2024-07-23T05:30:42.787Z",date_updated:"2024-07-23T12:31:48.466Z",slug:"secrets-management-with-gitops-and-sops",title:b,description:"\u003Cp\u003E\u003Cstrong id=\"docs-internal-guid-488fb0b3-7fff-d06c-41c6-b05b3f8640c7\"\u003ESecrets Management in CD Environments with GitOps and SOPS\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E",seo_title:b,seo_description:b,content:"\u003Cp dir=\"ltr\"\u003EModern software development practices heavily rely on continuous integration and continuous delivery (CI\u002FCD) pipelines for automated deployments. These pipelines automate various tasks, including building, testing, and deploying applications. However, a critical challenge in CD environments is managing secrets securely. Secrets, such as API keys, passwords, and database credentials, are essential for application functionality, but their exposure can lead to security vulnerabilities.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003ESOPS is a text file editor that automates the encryption and decryption of files. It supports various encryption methods, including GPG, AWS KMS, GCP KMS, AGE and HashiCorp Vault. SOPS integrates with VSCode and other editors, allowing users to edit encrypted files seamlessly.\u003C\u002Fp\u003E\n\u003Ch2 dir=\"ltr\"\u003EWhat is GitOps?\u003C\u002Fh2\u003E\n\u003Cp dir=\"ltr\"\u003EGitOps is a DevOps practice that uses Git as the single source of truth for infrastructure and application configurations. It enables developers to manage infrastructure and applications using familiar tools and workflows. GitOps workflows typically involve using a CI\u002FCD pipeline to automatically deploy changes to infrastructure and applications based on changes to Git repositories.\u003C\u002Fp\u003E\n\u003Ch2 dir=\"ltr\"\u003EApproaches for secret Management\u003C\u002Fh2\u003E\n\u003Cp dir=\"ltr\"\u003EWhen it comes to Continuous Deployment (CD), managing secrets securely is crucial. While GitOps and SOPS are popular approaches, there are other methods worth exploring. In this post, we'll discuss the importance of secrets management and alternative strategies using Vault and cloud providers. There are several approaches to secret management beyond HashiCorp Vault and cloud provider-specific solutions:\u003C\u002Fp\u003E\n\u003Cp\u003EExternal Secrets Operator (ESO): This is an open-source Kubernetes operator that integrates with external secret stores like AWS Secrets Manager, Google Cloud Secret Manager, and Azure Key Vault. It provides a user-friendly abstraction for managing secrets across multiple environments.\u003C\u002Fp\u003E\n\u003Cp\u003EHashicorp Vault: HashiCorp Vault is a comprehensive secret management solution that provides granular access controls, audit logs, and dynamic secret generation. It is widely used but can be complex to set up and maintain.\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003EIn-house Tools: Some organizations develop their own in-house tools for managing secrets and configurations. These tools can be tailored to the specific needs of the organization and can integrate with various secret management solutions.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp dir=\"ltr\"\u003EWe chose to use SOPS over other secret management options because of its unique approach to encryption and version control. Unlike other solutions that encrypt both the secret values and keys, SOPS only encrypts the values, leaving the keys in plain text. This allows us to track changes to secrets in our Git repository, ensuring that all environment files have the same keys.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003EThis approach also simplifies the management of secrets across different environments, as the keys remain consistent. SOPS integrates seamlessly with our existing Git workflow, making it easy to adopt and maintain. By using SOPS, we can ensure the security of our secrets while also maintaining transparency and control over changes to those secrets.\u003C\u002Fp\u003E\n\u003Ch2 dir=\"ltr\"\u003EWhat is SOPS?\u003C\u002Fh2\u003E\n\u003Cp dir=\"ltr\"\u003ESOPS is an open-source tool that enables developers to encrypt secrets in Git repositories. It uses AWS KMS, GCP KMS, or Azure Key Vault to encrypt secrets and stores the encrypted secrets in Git. SOPS also enables developers to decrypt secrets using the same key management service.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003ESecrets management is crucial for ensuring the security and integrity of sensitive data and systems within an organization. Here are some key reasons why secrets are important and what can be done for effective secret management:\u003C\u002Fp\u003E\n\u003Cp\u003EPreventing Data Breaches: Proper secrets management helps avoid costly data breaches by ensuring that sensitive information, such as passwords, keys, and tokens, are securely stored and transmitted. This minimizes the risk of unauthorized access to critical systems and data.\u003C\u002Fp\u003E\n\u003Cp\u003EProtecting Critical Assets: Secrets management safeguards critical assets, including user and application accounts, devices, and other network elements, from intrusions and unauthorized access.\u003C\u002Fp\u003E\n\u003Cp\u003ECompliance with Regulations: Effective secrets management helps organizations meet the requirements of security regulations and standards, such as NIST, FIPS, and HIPAA, by ensuring secure storage, transmission, and auditing of secrets.\u003C\u002Fp\u003E\n\u003Ch3 dir=\"ltr\"\u003EWhy use SOPS with GitOps?\u003C\u002Fh3\u003E\n\u003Cp dir=\"ltr\"\u003EUsing SOPS with GitOps provides several benefits:\u003C\u002Fp\u003E\n\u003Cp\u003ESecure storage of secrets: SOPS encrypts secrets before they are committed to Git, ensuring that they are not stored in plaintext.\u003C\u002Fp\u003E\n\u003Cp\u003EVersion control of secrets: Git provides version control for secrets, enabling developers to track changes and roll back to previous versions if necessary.\u003C\u002Fp\u003E\n\u003Cp\u003ESimplified secrets management: SOPS enables developers to manage secrets using familiar Git workflows, reducing the complexity of secrets management.\u003C\u002Fp\u003E\n\u003Ch3 dir=\"ltr\"\u003EHow Does It Work?\u003C\u002Fh3\u003E\n\u003Cp dir=\"ltr\"\u003ESOPS encrypts files automatically when they are written and decrypts them when they are read. It supports various encryption methods, making it highly customizable. SOPS can be used with text files or structured data such as YAML, JSON, INI, and ENV files.\u003C\u002Fp\u003E\n\u003Ch2 dir=\"ltr\"\u003EHow to use SOPS with GitOps\u003C\u002Fh2\u003E\n\u003Cp dir=\"ltr\"\u003ETo use SOPS with GitOps, we will use FluxCD's kustomize-controller. This controller decrypts secrets encrypted with SOPS using in-cluster secrets or cloud provider integrations, ensuring secure management within your GitOps workflow.\u003C\u002Fp\u003E\n\u003Ch3 dir=\"ltr\"\u003E\u003Cstrong\u003ESOPS with AWS KMS\u003C\u002Fstrong\u003E\u003C\u002Fh3\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EStep 1: Install SOPS\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp\u003EDownload SOPS:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Ecurl -LO https:\u002F\u002Fgithub.com\u002Fgetsops\u002Fsops\u002Freleases\u002Fdownload\u002Fv3.7.3\u002Fsops-v3.7.3.linux.amd64\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Col\u003E\n\u003Col start=\"2\"\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003ECopy the Downloaded file to local\u002Fbin:\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003C\u002Fol\u003E\n\u003Cpre\u003E\u003Ccode\u003Emv sops-v3.7.3.linux.amd64 \u002Fusr\u002Flocal\u002Fbin\u002Fsops\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Col\u003E\n\u003Col start=\"3\"\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EMake SOPS Executable:\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003C\u002Fol\u003E\n\u003Cpre\u003E\u003Ccode\u003Echmod +x \u002Fusr\u002Flocal\u002Fbin\u002Fsops\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EStep 2: Create a KMS Key\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Col\u003E\n\u003Col\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003ESign in to AWS Management Console:\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cul\u003E\n\u003Cli dir=\"ltr\" aria-level=\"2\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EOpen the AWS Management Console and navigate to the KMS console.\u003Cbr\u003E\u003Cbr\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003ECreate a KMS Key:\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cul\u003E\n\u003Cli dir=\"ltr\" aria-level=\"2\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EChoose \"Create key\".\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli dir=\"ltr\" aria-level=\"2\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EEnter an alias for the key (e.g., \"sops-key\").\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli dir=\"ltr\" aria-level=\"2\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EChoose \"AWS KMS generates the key material\".\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli dir=\"ltr\" aria-level=\"2\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EAdd the AWS users or roles that will manage the key.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli dir=\"ltr\" aria-level=\"2\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003ESet the key usage permissions.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli dir=\"ltr\" aria-level=\"2\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EReview and create the key.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fol\u003E\n\u003C\u002Fol\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EStep 3: Configure SOPS\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003ECreate a Configuration File: Create a file \u003Ccode\u003E~\u002F.sops.yaml\u003C\u002Fcode\u003E with the following content:\u003Cbr\u003Ecreation_rules:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003E- kms: arn:aws:kms:{region}:{account-id}:alias\u002F{alias}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp dir=\"ltr\"\u003EReplace \u003Ccode\u003E{region}\u003C\u002Fcode\u003E, \u003Ccode\u003E{account-id}\u003C\u002Fcode\u003E, and \u003Ccode\u003E{alias}\u003C\u002Fcode\u003E with your AWS region, account ID, and the alias of your KMS key.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EStep 4: Encrypt Secrets\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Col\u003E\n\u003Col\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003ECreate a YAML File with Secrets: Create a file \u003Ccode\u003Esecrets.yaml\u003C\u002Fcode\u003E containing your secrets.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EEncrypt the File:\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003C\u002Fol\u003E\n\u003Cdiv dir=\"ltr\" align=\"left\"\u003E\n\u003Cpre\u003E\u003Ccode\u003Esops --encrypt --kms arn:aws:kms:us-east-1:001301278159:key\u002Fb3f4dd5b-a217-46b5-aef2-152fa66be8f4 --encryption-context Role secrets.yaml\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EStep 5: Configure FluxCD\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Col\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003ECreate a Kubernetes Secret: Create a Kubernetes secret with the PGP keys on each cluster.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EAdd GitRepository and Kustomization Manifests: Add the GitRepository and Kustomization manifests to the fleet repository.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EConfigure Decryption: Configure the Kustomization manifest to use SOPS for decryption:\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cpre\u003E\u003Ccode\u003EapiVersion: kustomize.toolkit.fluxcd.io\u002Fv1\nkind: Kustomization\nmetadata:\nname: my-secrets\nnamespace: flux-system\nspec:\ninterval: 10m0s\nsourceRef:\n  kind: GitRepository\n  name: my-secrets\npath: .\u002F\nprune: true\ndecryption:\n  provider: sops\n  secretRef:\n    name: sops-gpg\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E\u003Cstrong\u003E&nbsp;Step 6: Deploy and Sync\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Col\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003ECommit and Push Changes: Commit the encrypted secrets and manifests to the Git repository.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003ESync with FluxCD: FluxCD will pull the changes from the Git repository, decrypt the secrets using SOPS and AWS KMS, and apply them to the cluster.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cp dir=\"ltr\"\u003EBy following these steps, you can securely manage and deploy Kubernetes secrets using SOPS and AWS KMS with FluxCD.\u003C\u002Fp\u003E\n\u003Ch3 dir=\"ltr\"\u003E\u003Cstrong\u003ESOPS with AGE encryption\u003C\u002Fstrong\u003E\u003C\u002Fh3\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EStep 1: Generate an AGE Key\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003EGenerate an AGE key: Use the \u003Ccode\u003Eage-keygen\u003C\u002Fcode\u003E command to create a key pair. This command generates a public and private key.\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Eage-keygen -o age.agekey\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EStep 2: Configure SOPS\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003ECreate .sops.yaml file: This file configures SOPS to use the AGE key for encryption and decryption.\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Ecreation_rules:\n- encrypted_regex: '^(data|stringData)$'\n  age: \u003C public_key \u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EStep 3: Encrypt Secrets\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003EEncrypt a Kubernetes secret: Use SOPS with the AGE public key to encrypt a secret.\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Esops --age=\u003C public_key \u003E --encrypt --encrypted-regex '^(data|stringData)$' --in-place basic-auth.yaml\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EStep 4: Create a Secret in Kubernetes\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003ECreate a secret in Kubernetes: Use the AGE private key to create a secret in the \u003Ccode\u003Eflux-system\u003C\u002Fcode\u003E namespace.\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Ecat age.agekey | kubectl create secret generic sops-age --namespace=flux-system --from-file=age.agekey=\u002Fdev\u002Fstdin\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EStep 5: Configure Flux\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003EUpdate the Flux Kustomization: Add the decryption configuration to the Flux Kustomization.\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003EapiVersion: kustomize.toolkit.fluxcd.io\u002Fv1beta2\nkind: Kustomization\nmetadata:\n name: flux-system\n namespace: flux-system\nspec:\n interval: 10m0s\n path: .\u002Fcluster\u002Fbase\n prune: true\n sourceRef:\n   kind: GitRepository\n   name: flux-system\n validation: client\n decryption:\n   provider: sops\n   secretRef:\n       name: sops-age\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EStep 6: Verify and Use\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003EVerify and use the encrypted secrets: Flux will now use SOPS to decrypt the secrets in the Kubernetes cluster.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003EThis setup ensures that your secrets are encrypted and decrypted securely using AGE and SOPS, and Flux can manage these secrets in your GitOps workflow.\u003C\u002Fp\u003E\n\u003Ch3 dir=\"ltr\"\u003E\u003Cstrong\u003ESOPS with Text Files\u003C\u002Fstrong\u003E&nbsp;\u003C\u002Fh3\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EInstall SOPS and Age: \u003C\u002Fstrong\u003EInstall SOPS and Age on the machine running Flux. You can get the binaries from their GitHub release pages.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003ECreate a PGP Key:\u003C\u002Fstrong\u003E Generate a PGP key using OpenGPG. Make sure not to specify a passphrase if you plan to use this key with Flux.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EConfigure SOPS:\u003C\u002Fstrong\u003E Create a \u003Ccode\u003E.sops.yaml\u003C\u002Fcode\u003E file in your Git repository to specify the encryption settings. This file defines the rules for encrypting and decrypting files.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EEncrypt Files: \u003C\u002Fstrong\u003EUse the \u003Ccode\u003Esops\u003C\u002Fcode\u003E command to encrypt your text files. For example, you can encrypt a file \u003Ccode\u003Esecret.yaml\u003C\u002Fcode\u003E using \u003Ccode\u003Esops -e -i secret.yaml.\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EStore Encrypted Files:\u003C\u002Fstrong\u003E Store the encrypted files in your Git repository.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EConfigure Flux: \u003C\u002Fstrong\u003EUpdate your Flux Kustomization to use SOPS for decryption. This involves specifying the \u003Ccode\u003Edecryption\u003C\u002Fcode\u003E provider as \u003Ccode\u003Esops\u003C\u002Fcode\u003E and referencing the secret containing the decryption key.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003EFlux will automatically decrypt the secrets when reconciling the cluster state. This ensures that the encrypted secrets are decrypted and applied to the cluster only when needed.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003EBy following these steps, you can securely manage and deploy encrypted text files using SOPS and FluxCD.\u003C\u002Fp\u003E\n\u003Ch3 dir=\"ltr\"\u003E\u003Cstrong\u003ESOPS with Structured Data\u003C\u002Fstrong\u003E\u003C\u002Fh3\u003E\n\u003Cp dir=\"ltr\"\u003ETo use SOPS with structured data using Fluxcd, you can follow these steps:\u003C\u002Fp\u003E\n\u003Col\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EConfigure SOPS:\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cul\u003E\n\u003Cli dir=\"ltr\" aria-level=\"2\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EInstall SOPS and age using their documentation.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli dir=\"ltr\" aria-level=\"2\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EGenerate a key using \u003Ccode\u003Eage-keygen\u003C\u002Fcode\u003E and create a \u003Ccode\u003E.sops.yaml\u003C\u002Fcode\u003E file with the public key.\u003Cbr\u003E\u003Cbr\u003E\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EEncrypt Secrets:\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cp dir=\"ltr\"\u003EEncrypt your Kubernetes secrets using SOPS. For example, you can encrypt a secret file like this:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003EapiVersion: v1\nkind: Secret\nmetadata:\n name: mysqlcreds\ntype: Opaque\ndata: null\nstringData:\n DB_USER: bugs\n DB_PASSWORD: bunny\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp dir=\"ltr\"\u003E\u003Cstrong\u003EEncrypt this file using SOPS:\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Esops -e mysqlcreds.yaml \u003E mysqlcreds-encrypted.yaml\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Col start=\"3\"\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EIntegrate with Flux:\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cp dir=\"ltr\"\u003EConfigure Flux to use SOPS for decryption. In your \u003Ccode\u003Egotk-sync.yaml\u003C\u002Fcode\u003E file, add the \u003Ccode\u003Edecryption\u003C\u002Fcode\u003E property:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003EapiVersion: kustomize.toolkit.fluxcd.io\u002Fv1beta2\nkind: Kustomization\nmetadata:\n name: flux-system\nspec:\n interval: 10m0s\n path: .\u002Fclusters\u002Fmy-cluster\n prune: true\n sourceRef:\n   kind: GitRepository\n   name: flux-system\n decryption:\n   provider: sops\n   secretRef:\n     name: my-private-key\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp dir=\"ltr\"\u003EEnsure the secret \u003Ccode\u003Emy-private-key\u003C\u002Fcode\u003E is created correctly and contains the private key.\u003C\u002Fp\u003E\n\u003Col start=\"4\"\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EApply Encrypted Secrets:\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cul\u003E\n\u003Cli dir=\"ltr\" aria-level=\"2\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EPush the encrypted secret file to your Git repository.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli dir=\"ltr\" aria-level=\"2\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EFlux will pick up the change and reconcile the cluster. The encrypted values should be decrypted and applied correctly.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fol\u003E\n\u003Cp dir=\"ltr\"\u003EIf decryption does not work, check the \u003Ccode\u003EFlux logs\u003C\u002Fcode\u003E using flux logs to identify any issues.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003EBy following these steps, you can effectively use SOPS with structured data using Fluxcd for secure and automated secret management in your Kubernetes cluster.\u003C\u002Fp\u003E\n\u003Ch3 dir=\"ltr\"\u003E\u003Cstrong\u003ESOPS with HashiCorp Vault\u003C\u002Fstrong\u003E\u003C\u002Fh3\u003E\n\u003Cp dir=\"ltr\"\u003EHashiCorp Vault is a secrets manager that provides secure storage and retrieval of secrets. SOPS can be used with HashiCorp Vault for encryption and decryption.\u003C\u002Fp\u003E\n\u003Cstrong\u003EA Short Introduction to Vault\u003C\u002Fstrong\u003E\n\u003Cp dir=\"ltr\"\u003EHashiCorp Vault is a secrets manager that provides secure storage and retrieval of secrets. It can be used for encryption, decryption, and signing of data. Vault can be used with various backends, including AWS KMS, GCP KMS, and local file systems.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003ETo manage Kubernetes secrets using SOPS with HashiCorp Vault and Flux, follow these steps:\u003C\u002Fp\u003E\n\u003Col\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EConfigure HashiCorp Vault:\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cul\u003E\n\u003Cli dir=\"ltr\" aria-level=\"2\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003ESet up HashiCorp Vault as your identity-based secrets and encryption management system.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli dir=\"ltr\" aria-level=\"2\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EEnable the transit backend in Vault to use it for encryption.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EEncrypt Secrets with SOPS: Export the \u003Ccode\u003EVAULT_ADDR\u003C\u002Fcode\u003E and \u003Ccode\u003EVAULT_TOKEN\u003C\u002Fcode\u003E environment variables to your shell.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cp dir=\"ltr\"\u003EUse \u003Ccode\u003Esops\u003C\u002Fcode\u003E to encrypt a Kubernetes Secret, specifying the Vault address and token:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode\u003Esops --hc-vault-transit $VAULT_ADDR\u002Fv1\u002Fsops\u002Fkeys\u002Fmy-encryption-key --encrypt \\\n--encrypted-regex '^(data|stringData)$' --in-place basic-auth.yaml\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Col start=\"3\"\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003ECreate a Secret for the Vault Token: Create a secret for the Vault token using \u003Ccode\u003Ekubectl\u003C\u002Fcode\u003E:\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cdiv dir=\"ltr\" align=\"left\"\u003E\n\u003Cpre\u003E\u003Ccode\u003Eecho $VAULT_TOKEN | kubectl create secret generic sops-hcvault \\\n--namespace=flux-system --from-file=sops.vault-token=\u002Fdev\u002Fstdin\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Col start=\"4\"\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003ESet Up Flux Kustomization: Set the decryption secret in the Flux Kustomization to \u003Ccode\u003Esops-hcvault\u003C\u002Fcode\u003E.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EAuthorize Kustomize Controller: Configure the kustomize-controller to use workload identity by adding patches to the flux-system kustomization.yaml file.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli dir=\"ltr\" aria-level=\"1\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EIntegrate with Flux:\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cul\u003E\n\u003Cli dir=\"ltr\" aria-level=\"2\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EFlux supports decrypting secrets stored in Flux sources using SOPS without additional controllers.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003Cli dir=\"ltr\" aria-level=\"2\"\u003E\n\u003Cp dir=\"ltr\" role=\"presentation\"\u003EFlux can synchronize secrets from Vault to a Kubernetes secret using the Vault CSI provider, allowing applications to reference the secret without refactoring.\u003C\u002Fp\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fol\u003E\n\u003Cp dir=\"ltr\"\u003EBy following these steps, you can securely manage Kubernetes secrets using SOPS with HashiCorp Vault and Flux.\u003C\u002Fp\u003E\n\u003Ch3 dir=\"ltr\"\u003EConclusion\u003C\u002Fh3\u003E\n\u003Cp dir=\"ltr\"\u003EWhen using cloud services, it is generally recommended to utilize the cloud provider's key management service for better access control and management of encryption keys. For instance, Google Cloud offers Cloud Key Management Service (Cloud KMS), which allows users to create and manage customer-managed encryption keys (CMEKs) for various Google Cloud services and applications. Similarly, Azure provides Azure Key Vault, which supports customer-managed keys (CMKs) and offers different options for storing and managing keys in the cloud.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003EIf the cloud provider does not offer a key management service, alternatives include using Advanced Encryption Standard (AES) encryption or deploying an independent vault. This approach provides full control over encryption keys and can be used in various environments.\u003C\u002Fp\u003E\n\u003Cp dir=\"ltr\"\u003ETools like SOPS can be used to manage secrets securely and scalably in a GitOps environment. SOPS supports multiple encryption methods, including AWS KMS, GCP KMS, and HashiCorp Vault, making it highly customizable.\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E",tags:a,time_to_read:"5 mins",user_created:{id:c,first_name:d,last_name:e,email:f,password:g,location:a,title:h,description:a,tags:a,avatar:i,language:a,tfa_secret:a,status:j,role:k,token:a,last_access:l,last_page:m,provider:n,external_identifier:a,auth_data:a,email_notifications:o,appearance:a,theme_dark:a,theme_light:a,theme_light_overrides:a,theme_dark_overrides:a},user_updated:{id:c,first_name:d,last_name:e,email:f,password:g,location:a,title:h,description:a,tags:a,avatar:i,language:a,tfa_secret:a,status:j,role:k,token:a,last_access:l,last_page:m,provider:n,external_identifier:a,auth_data:a,email_notifications:o,appearance:a,theme_dark:a,theme_light:a,theme_light_overrides:a,theme_dark_overrides:a},image:{id:"e311b385-fa5a-4c03-9f38-2d1ddc79729b",storage:"AMZ",filename_disk:"e311b385-fa5a-4c03-9f38-2d1ddc79729b.png",filename_download:"Untitled_design__3_-removebg-preview.png",title:"Untitled Design  3  Removebg Preview",type:"image\u002Fpng",folder:"33b4de25-d0f2-4999-ba32-6883f9932c34",uploaded_by:c,uploaded_on:"2024-07-23T05:30:33.879Z",modified_by:a,modified_on:"2024-07-23T05:30:35.600Z",charset:a,filesize:"221194",width:p,height:p,duration:a,embed:a,description:a,location:a,tags:a,metadata:{},focal_point_x:a,focal_point_y:a},authors:[]},_img:{"/_ipx/f_png/img/plateform-engineers.png":"\u002F_nuxt\u002Fimage\u002Fe7b705.png","/_ipx/f_png,s_68x55/img/plateform-engineers.png":"\u002F_nuxt\u002Fimage\u002F418082.png","/_ipx/h_400,f_png/https://data.improwised.com/assets/e311b385-fa5a-4c03-9f38-2d1ddc79729b":"\u002F_nuxt\u002Fimage\u002Fb697f9.png","/_ipx/f_png,h_400/https://data.improwised.com/assets/e311b385-fa5a-4c03-9f38-2d1ddc79729b":"\u002F_nuxt\u002Fimage\u002F05ae85.png"}}],fetch:{},mutations:[]}}(null,"Secrets Management in CD Environments with GitOps and SOPS","f6ae4b64-c3c4-4f35-8b41-9f48088de4b1","Angita","Shah","angita.shah@improwised.com","**********","SEO Specialist","20d037d1-41ee-4efd-b034-1350a3ce336d","active","5ef170ac-f2e9-4b93-a9ea-5c54fcf0fa40","2024-07-23T12:30:57.510Z","\u002Fcontent\u002Fpe_blog","default",true,500)));