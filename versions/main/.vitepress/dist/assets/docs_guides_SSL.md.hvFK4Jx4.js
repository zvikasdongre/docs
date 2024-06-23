import{_ as i,c as s,o as a,a5 as t}from"./chunks/framework.Cl2Ecfyq.js";const b=JSON.parse('{"title":"Creating SSL Certificates","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guides/SSL.md","filePath":"docs/guides/SSL.md"}'),e={name:"docs/guides/SSL.md"},n=t('<h1 id="creating-ssl-certificates" tabindex="-1">Creating SSL Certificates <a class="header-anchor" href="#creating-ssl-certificates" aria-label="Permalink to &quot;Creating SSL Certificates&quot;">​</a></h1><p>Our guide to creating SSL Certificates</p><h2 id="step-1-installing-certbot" tabindex="-1">Step 1: Installing Certbot <a class="header-anchor" href="#step-1-installing-certbot" aria-label="Permalink to &quot;Step 1: Installing Certbot&quot;">​</a></h2><p>First we need to install certbot</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-MCL6K" id="tab-5ILNfAL" checked><label for="tab-5ILNfAL">Nginx</label><input type="radio" name="group-MCL6K" id="tab-lfNdcJG"><label for="tab-lfNdcJG">Apache</label><input type="radio" name="group-MCL6K" id="tab-tdeSlLw"><label for="tab-tdeSlLw">Other</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> python3-certbot-nginx</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> python3-certbot-apache</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> certbot</span></span></code></pre></div></div></div><h2 id="step-2-creating-the-certificate" tabindex="-1">Step 2: Creating the Certificate <a class="header-anchor" href="#step-2-creating-the-certificate" aria-label="Permalink to &quot;Step 2: Creating the Certificate&quot;">​</a></h2><p>Then we are going to create the certificate</p><h3 id="step-1-stopping-the-webserver" tabindex="-1">Step 1: Stopping the webserver <a class="header-anchor" href="#step-1-stopping-the-webserver" aria-label="Permalink to &quot;Step 1: Stopping the webserver&quot;">​</a></h3><div class="important custom-block github-alert"><p class="custom-block-title">IMPORTANT</p><p>Make sure you are not running anything on port 80 if you are running anything on port 80 certbot will not work. You can check this by running: <code>sudo lsof -i :80</code></p></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-LPd7T" id="tab-CkDrJiK" checked><label for="tab-CkDrJiK">Nginx</label><input type="radio" name="group-LPd7T" id="tab-reIwtAV"><label for="tab-reIwtAV">Apache</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apache2</span></span></code></pre></div></div></div><h3 id="step-2-creating-the-certificate-1" tabindex="-1">Step 2: Creating the certificate <a class="header-anchor" href="#step-2-creating-the-certificate-1" aria-label="Permalink to &quot;Step 2: Creating the certificate&quot;">​</a></h3><div class="important custom-block github-alert"><p class="custom-block-title">IMPORTANT</p><p>Make sure to replace example.com with the domain name you want to use.</p></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-LBHN_" id="tab-VqLbY3B" checked><label for="tab-VqLbY3B">Nginx</label><input type="radio" name="group-LBHN_" id="tab-YSdN_dV"><label for="tab-YSdN_dV">Apache</label><input type="radio" name="group-LBHN_" id="tab-ShjN_s0"><label for="tab-ShjN_s0">Other</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">certbot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> certonly</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> example.com</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">certbot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> certonly</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --apache</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> example.com</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">certbot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> certonly</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --standalone</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> example.com</span></span></code></pre></div></div></div><h2 id="renewing" tabindex="-1">Renewing <a class="header-anchor" href="#renewing" aria-label="Permalink to &quot;Renewing&quot;">​</a></h2><p>And now you are done. The certificates will however need to be renewed often. You can do this manualy by running <code>certbot renew</code> or you can setup a cronjob to do it for you:</p><p>First open your crontab: <code>crontab -e</code></p><p>Then you set this cronjob in it to do the renewing for you every day at 23:00</p><div class="important custom-block github-alert"><p class="custom-block-title">IMPORTANT</p><p>Make sure to replace nginx with the webserver that you are using.</p></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 23</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> certbot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> renew</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --quiet</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --deploy-hook</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;systemctl restart nginx&#39;</span></span></code></pre></div>',19),l=[n];function p(h,o,r,d,c,k){return a(),s("div",null,l)}const u=i(e,[["render",p]]);export{b as __pageData,u as default};
