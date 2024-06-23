import{_ as s,c as i,o as a,a5 as t}from"./chunks/framework.Cl2Ecfyq.js";const c=JSON.parse('{"title":"Preparation","description":"","frontmatter":{},"headers":[],"relativePath":"docs/installation/install.md","filePath":"docs/installation/install.md"}'),n={name:"docs/installation/install.md"},e=t(`<h1 id="preparation" tabindex="-1">Preparation <a class="header-anchor" href="#preparation" aria-label="Permalink to &quot;Preparation&quot;">​</a></h1><h3 id="supported-operating-systems" tabindex="-1">Supported operating systems <a class="header-anchor" href="#supported-operating-systems" aria-label="Permalink to &quot;Supported operating systems&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Operating System</th><th>Version</th><th style="text-align:center;">Supported</th></tr></thead><tbody><tr><td><strong>Ubuntu</strong></td><td>20.04</td><td style="text-align:center;">✅</td></tr><tr><td></td><td>22.04</td><td style="text-align:center;">✅</td></tr><tr><td></td><td>24.04</td><td style="text-align:center;">Untested</td></tr><tr><td><strong>CentOS</strong></td><td>7</td><td style="text-align:center;">✅</td></tr><tr><td></td><td>8</td><td style="text-align:center;">✅</td></tr><tr><td><strong>Debian</strong></td><td>10</td><td style="text-align:center;">✅</td></tr><tr><td></td><td>11</td><td style="text-align:center;">✅</td></tr><tr><td><strong>Windows</strong></td><td>Any</td><td style="text-align:center;">❌</td></tr></tbody></table><h2 id="required-dependencies" tabindex="-1">Required Dependencies <a class="header-anchor" href="#required-dependencies" aria-label="Permalink to &quot;Required Dependencies&quot;">​</a></h2><p>First of all check if you have all of the dependencies. If not install them with the following commands:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-t4rTc" id="tab-r2bejDX" checked><label for="tab-r2bejDX">General</label><input type="radio" name="group-t4rTc" id="tab-9fueRCx"><label for="tab-9fueRCx">Ubuntu 22.04</label><input type="radio" name="group-t4rTc" id="tab-50v9mWn"><label for="tab-50v9mWn">Debian</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> software-properties-common</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> curl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-transport-https</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ca-certificates</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnupg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LC_ALL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">C.UTF-8</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> add-apt-repository</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ppa:ondrej/php</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://downloads.mariadb.com/MariaDB/mariadb_repo_setup</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bash</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --mariadb-server-version=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mariadb-10.11&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php8.2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php8.2-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mariadb-server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unzip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis-server</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> software-properties-common</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> curl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-transport-https</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ca-certificates</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnupg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LC_ALL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">C.UTF-8</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> add-apt-repository</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ppa:ondrej/php</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php8.2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php8.2-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mariadb-server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unzip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis-server</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> software-properties-common</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> curl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ca-certificates</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnupg2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lsb-release</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;deb https://packages.sury.org/php/ $(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lsb_release</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">) main&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tee</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/apt/sources.list.d/sury-php.list</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  https://packages.sury.org/php/apt.gpg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gpg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dearmor</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/apt/trusted.gpg.d/sury-keyring.gpg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php8.2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php8.2-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://downloads.mariadb.com/MariaDB/mariadb_repo_setup</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bash</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --mariadb-server-version=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mariadb-10.11&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mariadb-server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unzip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis-server</span></span></code></pre></div></div></div><h4 id="composer" tabindex="-1">Composer <a class="header-anchor" href="#composer" aria-label="Permalink to &quot;Composer&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://getcomposer.org/installer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --install-dir=/usr/local/bin</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --filename=composer</span></span></code></pre></div><h2 id="installing" tabindex="-1">Installing <a class="header-anchor" href="#installing" aria-label="Permalink to &quot;Installing&quot;">​</a></h2><p>Creating the directory</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/www/paymenter</span></span></code></pre></div><p>Downloading the latest release to the directory</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/www/paymenter</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Lo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> paymenter.tar.gz</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/paymenter/paymenter/releases/latest/download/paymenter.tar.gz</span></span></code></pre></div><p>Unzip the code</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xzvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> paymenter.tar.gz</span></span></code></pre></div><p>Granting the right permissions to the folder:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -R</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 755</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> storage/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bootstrap/cache/</span></span></code></pre></div><h2 id="creating-database" tabindex="-1">Creating database <a class="header-anchor" href="#creating-database" aria-label="Permalink to &quot;Creating database&quot;">​</a></h2><div class="important custom-block github-alert"><p class="custom-block-title">IMPORTANT</p><p>Remember to change yourPassword to a stronger password</p></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mysql</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CREATE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> USER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;paymenter&#39;@&#39;127.0.0.1&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> IDENTIFIED</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> BY</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;yourPassword&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CREATE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DATABASE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> paymenter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GRANT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ALL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PRIVILEGES</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ON</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> paymenter.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;paymenter&#39;@&#39;127.0.0.1&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> WITH</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GRANT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> OPTION</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">quit</span></span></code></pre></div><h2 id="downloading-packages" tabindex="-1">Downloading packages <a class="header-anchor" href="#downloading-packages" aria-label="Permalink to &quot;Downloading packages&quot;">​</a></h2><p>Run this command to install the composer packages</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">composer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --no-dev</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --optimize-autoloader</span></span></code></pre></div><h2 id="setting-up-env" tabindex="-1">Setting up .env <a class="header-anchor" href="#setting-up-env" aria-label="Permalink to &quot;Setting up .env&quot;">​</a></h2><p>First we are going to create the .env file</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .env.example</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .env</span></span></code></pre></div><p>Now we are going to generate your encryption key.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key:generate</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --force</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> storage:link</span></span></code></pre></div><div class="danger custom-block github-alert"><p class="custom-block-title">DANGER</p><p>Back up your encryption key (APP_KEY in the .env file). It is used as an encryption key for all data that needs to be stored securely (e.g. user passwords). Store it somewhere safe - not just on your server. If you lose it all encrypted data is irrecoverable – even if you have database backups.</p></div><p>The next step is opening your .env file with a editor like nano and then changing these values to the database, database-user and database-password that we just created.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DB_DATABASE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">paymenter</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DB_USERNAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">paymenter</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DB_PASSWORD</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">yourPassword</span></span></code></pre></div><h2 id="setting-up-database" tabindex="-1">Setting up database <a class="header-anchor" href="#setting-up-database" aria-label="Permalink to &quot;Setting up database&quot;">​</a></h2><p>Now that we have set the correct user and database in the .env file we can go ahead and setup the database Simple run this command and your database is ready to be used.</p><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>The command below may take some time to run depending on your machine. Please DO NOT exit the process until it is completed!</p></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> migrate</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --force</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --seed</span></span></code></pre></div><p>Once this process is completed you can make a user for yourself by running.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> p:user:create</span></span></code></pre></div><h2 id="creating-cronjob-and-service" tabindex="-1">Creating cronjob and service <a class="header-anchor" href="#creating-cronjob-and-service" aria-label="Permalink to &quot;Creating cronjob and service&quot;">​</a></h2><h3 id="creating-cronjob" tabindex="-1">Creating cronjob <a class="header-anchor" href="#creating-cronjob" aria-label="Permalink to &quot;Creating cronjob&quot;">​</a></h3><p>Now we are going to setup the cronjob to run every minute. You can do this manualy by running <code>crontab -e</code> and entering your cronjob or use this command to create it.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">crontab</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;* * * * * php /var/www/paymenter/artisan schedule:run &gt;&gt; /dev/null 2&gt;&amp;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> crontab</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span></span></code></pre></div><p>The next and final step is creating the service that will run the Queue Worker</p><h3 id="creating-service" tabindex="-1">Creating service <a class="header-anchor" href="#creating-service" aria-label="Permalink to &quot;Creating service&quot;">​</a></h3><p>Create a new service file in <code>/etc/systemd/system</code> called <code>paymenter.service</code> then open this file and place the following inside:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Unit]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Description</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Paymenter</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Queue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Worker</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Service]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># On some systems the user and group might be different.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Some systems use \`apache\` or \`nginx\` as the user and group.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">User</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">www-data</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Group</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">www-data</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Restart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">always</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ExecStart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/usr/bin/php</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /var/www/paymenter/artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> queue:work</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">StartLimitInterval</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">180</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">StartLimitBurst</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">30</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RestartSec</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">5s</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Install]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WantedBy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">multi-user.target</span></span></code></pre></div><p>Then just enable and start the service and you are done with installing Paymenter.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --now</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> paymenter.service</span></span></code></pre></div><p>Now we have to <a href="./webserver">Setup the webserver</a></p>`,48),h=[e];function p(l,k,r,d,F,g){return a(),i("div",null,h)}const y=s(n,[["render",p]]);export{c as __pageData,y as default};
