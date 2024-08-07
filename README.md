<p align="center">[Logo]</p>

<p align="center">portfolio-lab-2024</p>

<p align="center">Get your own digital Portfolio.</p>

</br>

## About Portfolio Lab.

The reason why you don't have your own portfolio website is that you have no time? too lazy? too many side projects?  
We guess there is a lot of excuses why you don't have a digital portfolio online yet.  
Portfolio Labs goal is to give you an efficient way to do this with a basic framework and pre-built themes/designs.

Saved on your local machine and deployed by yourself. Absolute self-control and also individually customizable.
And the best thing about it? It's free! Really free and not just pseudo free.
Check out our live demo and start cloning the repo to reach your goal!

<p align="center">
<a href="https://github.com/jstephan087/portfolio-lab-2024"><br>Live Demo</br></a>
</p>

<p align="center"><strong>Clone · Install · Edit · Deploy!</strong></p>

## Current Features

- Mockup / prototype by local live server
- add / edit / delete in live server preview
- Connect with GitHub
- Connect with Netlify and experience easy deployment
- Disable / enable section components
- ... more to come with time

</br>

## Get started!

### How to copy the Portfolio Lab Project to your local machine

There are many ways to do this, but we'll show you how to set up your project with an SSH key.

</br>

### Prepare your SSH key

If you don't have an SSH key already, please read how to set up an SSH key with [GitHub Docs](https://docs.github.com/de/enterprise-cloud%40latest/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).
If you already have an SSH key, then let's get started.

</br>

### Open the CLI

Open your terminal (Git Bash/ VSCode/ Command line).

> Note for windows user: The CLI (PowerShell) can cause issues when executing git commands. We recommend using Git Bash.

</br>
Change to the directory in which you want to clone the new repository.

```bash
cd documents/foldername/...
```

<div style="margin-left:30px;">
<details>
<summary style="font-weight:bold;">Optional: use one command line</summary>
</br>

```bash
# git clone <repo> <directory>

git clone git@github.com:mimibak/portfolio-testlab.git C:\documents\foldername
```

</br>

Note: You can open the CLI and run the clone command in one step by adding the directory at the end of your clone command. Let me know if you need further assistance! </br>
Change the directory to your new repository

```bash
cd documents/portfolio
```

</details>
</div>

</br>

### Run the clone command

Paste the copied SSH URL and run the clone command

```bash
#git clone
git clone git@github.com:mimibak/portfolio-testlab.git
```

Change the directory to your new repository

```
cd portfolio-testlab
```

</br>
<hr>
</br>

### Connect GitHub with your new repository

1. Open <a href="https://github.com/" target="_blank">GitHub</a>

2. Create new repository<br>
   (click on the green button on the upper left side `New` or on the upper right side `+` > Create new repository)

   - Choose a repository name (we recommend: e.g. portfolio-yourname)

   - (Optional) Add a description to the repository

   - Set the repository to `public` or `private` </br>

   > (we recommend private: note that you're dealing with sensitive data and your privacy is important to us.)

   - Click the button `Create Repository`.

</br>
</br>

### Connect the local repository to the new GitHub repository

After creating your new GitHub repository, you'll see a "Quick setup" page. </br> Follow these steps:</br>

1. On the Quick setup page, make sure the `SSH` tab is selected.
2. Copy the `SSH URL`for your new repository. It should look like this: </br>

   ```bash
    git@github.com/username/your-repo-name.git
   ```

   You'll use it in the next step to update your local repository's remote URL.
   </br> </br>

   > Note: The URL you copy will have your actual GitHub username and the name of your new repository, not "username" and "your-repo-name".

</br>
</br>

### Switch to your CLI (VSCode/Terminal/Bash) and configure

In the following steps, you will set a new origin URL to change the remote connection.

1. Open a new terminal and navigate to your cloned repository </br>
   ```bash
    cd documents/foldername/your-repo-name
   ```
2. Set the new remote URL: </br>
   Replace `username` and `your-repo-name`with your actual GitHub username and the name of your new repository. </br>

   ```bash
    git remote set-url origin [Paste copied SSH URL]
   ```

3. Verify Changes:

   ```bash
   git remote -v
   ```

   #### It should display:

   ```bash
    origin  git@github.com:username/your-repo-name.git (fetch)
    origin  git@github.com:username/your-repo-name.git (push)
   ```

4. Push your local repository to the new GitHub repository:
   ```bash
   git push -u origin main
   ```

### Optional:

<div style="margin-left:20px">

Keep reference to the original repository. If you want to maintain a connection to the original Portfolio Lab repository:

```bash
git remote add og-portfolio-lab git@github.com:mimibak/portfolio-testlab.git
```

This allows you to fetch updates from the original repository while working on your own version

</div>

<br>
<br>

## Let's go live!

### Deployment with Netlify

Open Netlify and sign up with GitHub or login if you already have a Netlify account. </br>
Follow these steps to go live with your new portfolio:
</br>

<div align="center">

[Netlify Newbie](#newbies) </br>
[Netlify Ninja](#ninja)

</div>

</br>
</br>

<a id="newbies"></a>
**For Netlify Newbies:**

1. <a href="https://app.netlify.com/signup" target="_blank">Sign up to Netlify using your GitHub account</a>
2. Click on `Import an existing Project` > `Import from Git`

3. Let's deploy your project with GitHub
4. Now you need to `Authorize Netlify`
5. You'll get a message:
   > Message: No repository found > Configure Netlify on GitHub
6. Next a popup window shows: `Install Netlify`

   - Choose between `All repositories` or `Only select repositories`

     > When you selected `Only select repositories`, please choose `your-repo-name`

   - click `install`

7. Select the repository you want to deploy
8. Configure your site settings:

- Set a custom site name (check availability) </br> (we recommend: portfolio-youralias)

- Verify the branch to deploy (usually main)

- You can leave the build settings on default</br>Review build settings (optional for advanced users)

9.  Click `Deploy [your-repo-name]` to start the deployment process
10. Wait for the deployment to complete. You can monitor the progress in the `Production deploys`section
11. Once deployed, click the provided link to view your live site

   </br>
   </br>

<a id="ninja"></a>
**For Netlify Ninja**</br>

1. Login to Netlify
2. Click the button `Add new site`
3. Choose `Import an existing project`[^1]
4. Choose GitHub as your Git provider
5. Select the repository you want to deploy
6. Configure your site settings:

   - Set a custom site name (check availability) </br> (we recommend: portfolio-youralias)

   - You can leave the build settings on default
   - (optional for advanced users) Review build settings

7. Click `Deploy [your-repo-name]` to start the deployment process
8. Wait for the deployment to complete. You can monitor the progress in the `Production deploys`section
9. Once deployed, click the provided link (in the first container) to view your live site

[^1]: If the desired GitHub repository is not listed, go to GitHub and check your Netlify configurations under Settings > Applications.

</br>

<details>
<summary style="font-weight:bold;">Optional: use custom domain</summary>
If you already have your own domain or want to buy one, you can proceed with step 2.
Set up a custom domain and don't forget to get the HTTPS cerificate if you connect your custom domain.
</details>

</br>

> Note: This process integrates your GitHub repository with Netlify, allowing for automated deployments whenever you push changes to your specified branch

</br>
</br>

## History & current state

The project was born as a "flash idea" for us due to our internship at
Coding Bootcamps Europe. We call it the portfolio lab project.

It will be a personal challenge to plan, create and process this project for our application road. We considered this project to be a open-source project for the whole community as one of the first priorities, so everyone who struggles with the same issues like time, creativity or laziness can easily take our project and use it and apply to new job offers with it.

Enjoy yourself!

</br>

## Tools & Co.

### Dev tools:

- TyepScript
- React
- Netlify
- VSCode
  #### Extenstions:
  - ESLint
  - Prettier
  - TypeScript Prettier
  - Markdown All in ONe
  - etc.

</br>

## Contribute

Portfolio Lab project is a concept project. Whoever symphatize with this project, feel free to fork it or contribute however possible.
If you have any ideas or suggestions, contact us or open an issue!

Help us to create something bigger for us and for you.
#futureofCVs

</br>

## Donate

more infos to come..
