import{C as e}from"./app.44e4f2cc.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const t={},s=e(`<blockquote><p>\u9700\u8981\u767B\u9646\u8FDC\u7A0B\u670D\u52A1\u5668\u7684\u573A\u666F\u6BD4\u8F83\u5C11\uFF0C\u4EE5\u81F3\u4E8E\u6BCF\u6B21\u8981\u8FDE\u63A5\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\uFF0C\u603B\u662F\u8981\u8C37\u6B4C\u4E00\u4E0B\u65B9\u6CD5\u3002\u75DB\u5B9A\u601D\u75DB\uFF0C\u7F51\u4E0A\u641C\u522E\u5E76\u6574\u7406\u51FA\u6765\uFF0C\u5907\u7528\u3002</p></blockquote><h2 id="\u767B\u5F55\u8FDC\u7A0B\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u767B\u5F55\u8FDC\u7A0B\u670D\u52A1\u5668" aria-hidden="true">#</a> \u767B\u5F55\u8FDC\u7A0B\u670D\u52A1\u5668</h2><h3 id="\u5BC6\u7801\u767B\u9646" tabindex="-1"><a class="header-anchor" href="#\u5BC6\u7801\u767B\u9646" aria-hidden="true">#</a> \u5BC6\u7801\u767B\u9646</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u901A\u8FC7\u8F93\u5165\u9700\u8981\u767B\u9646\u7684\u7528\u6237\u540D\u3001\u670D\u52A1\u5668 IP\u3001\u670D\u52A1\u5668\u7AEF\u53E3\u8FDB\u884C\u8FDE\u63A5</span>
<span class="token comment"># enter \u540E\u4F1A\u8981\u6C42\u8F93\u5165\u767B\u9646\u5BC6\u7801</span>
<span class="token comment"># \u5BC6\u7801\u6821\u9A8C\u6210\u529F\u540E\u5373\u53EF\u5B8C\u6210\u767B\u9646</span>
$ <span class="token function">ssh</span> userName@monitorIP -p port
</code></pre></div><h3 id="sshkey-\u767B\u9646" tabindex="-1"><a class="header-anchor" href="#sshkey-\u767B\u9646" aria-hidden="true">#</a> sshKey \u767B\u9646</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u901A\u8FC7\u8F93\u5165\u9700\u8981\u767B\u9646\u7684\u7528\u6237\u540D\u3001\u670D\u52A1\u5668 IP\u3001\u670D\u52A1\u5668\u7AEF\u53E3\u540E\u6821\u9A8C sshKey \u540E\u8FDB\u884C\u8FDE\u63A5</span>
<span class="token comment"># demo\uFF1A</span>
<span class="token comment"># ssh root@192.168.9.9 -p 23333 -i ~/.ssh/demo-rsa</span>
$ <span class="token function">ssh</span> userName@monitorIP -p port -i sshKeyPath
</code></pre></div><div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero;" transform="matrix(.042 0 0 .042 0 -5.178)"></path><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero;" transform="matrix(.042 0 0 .042 0 -5.178)"></path></svg><p class="custom-container-title">TIP</p><p>sshKey \u767B\u9646\u65B9\u5F0F\u9700\u8981\u5148\u5C06\u8FDC\u7A0B\u670D\u52A1\u5668\u7684\u516C\u94A5\u5BFC\u5165\u5230\u8BBE\u5907\u4E2D\u3002</p></div><h2 id="\u9000\u51FA\u8FDC\u7A0B\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u9000\u51FA\u8FDC\u7A0B\u670D\u52A1\u5668" aria-hidden="true">#</a> \u9000\u51FA\u8FDC\u7A0B\u670D\u52A1\u5668</h2><table><thead><tr><th>\u5E8F\u53F7</th><th>\u65B9\u6CD5</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>1</td><td>\u5173\u95ED\u7EC8\u7AEF</td><td>\u7B80\u5355\u7C97\u66B4</td></tr><tr><td>2</td><td>\u8F93\u5165logout</td><td>\u6B63\u5E38\u9000\u51FA</td></tr><tr><td>3</td><td>\u8F93\u5165exit</td><td>\u6B63\u5E38\u9000\u51FA</td></tr><tr><td>4</td><td>\u5FEB\u6377\u952E Ctrl+D</td><td>\u6B63\u5E38\u9000\u51FA</td></tr></tbody></table><h2 id="\u521B\u5EFA-sshkey" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-sshkey" aria-hidden="true">#</a> \u521B\u5EFA SSHKEY</h2><p>\u901A\u8FC7 <code>SSHKEY</code> \u534F\u8BAE\u8FDE\u63A5\u8FDC\u7AEF\u670D\u52A1\u5668\uFF0C\u53EF\u4EE5\u7701\u53BB\u8F93\u5165\u8D26\u6237\u5BC6\u7801\u7684\u64CD\u4F5C\uFF0C\u5373\u5B89\u5168\u53C8\u4FBF\u6377\u8FD8\u53EF\u4EE5\u514D\u53BB\u8BB0\u5FC6\u5404\u4E2A\u5E73\u53F0\u7684\u8D26\u53F7\u5BC6\u7801\u3002\u65E2\u7136\u597D\u5904\u8FD9\u4E48\u660E\u663E\uFF0C\u6709\u5565\u7406\u7531\u4E0D\u7528\u5462\uFF01</p><h3 id="\u521B\u5EFA-sshkey-mac" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-sshkey-mac" aria-hidden="true">#</a> \u521B\u5EFA <code>SSHKEY</code> - MAC</h3><ol><li><p>\u6253\u5F00\u7EC8\u7AEF.</p></li><li><p>\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 <code>SSH KEY</code>.</p><div class="language-text ext-text"><pre class="language-text"><code>$ ssh-keygen -t rsa -b 4096 -C &quot;your_email@example.com&quot;
</code></pre></div><p>\u6210\u529F\u540E\u4F1A\u8FD4\u56DE\u4EE5\u4E0B\u4FE1\u606F.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; Generating public/private rsa key pair.
</code></pre></div></li><li><p>\u8BBE\u7F6E\u4FDD\u5B58\u5730\u5740.</p><p>\u76F4\u63A5 <code>ENTER</code> \u9009\u62E9\u9ED8\u8BA4\u5730\u5740.</p></li><li><p>\u8BBE\u7F6E\u5BC6\u7801.</p><p>\u5982\u679C\u6709\u9700\u8981\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u5BC6\u7801.</p></li></ol><h3 id="\u67E5\u770B-ssh-key" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B-ssh-key" aria-hidden="true">#</a> \u67E5\u770B <code>SSH KEY</code></h3><ol><li><p>\u6253\u5F00\u7EC8\u7AEF.</p></li><li><p>\u6267\u884C\u67E5\u770B\u547D\u4EE4.</p><div class="language-text ext-text"><pre class="language-text"><code>$ ls -al ~/.ssh
</code></pre></div><p>\u6267\u884C\u540E\uFF0C\u5982\u679C\u6587\u4EF6\u5B58\u5728\uFF0C\u4F1A\u5217\u51FA\u6765\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E3A\u4EE5\u4E0B\u6587\u4EF6</p><div class="language-text ext-text"><pre class="language-text"><code>id_rsa.pub
id_ecdsa.pub
id_ed25519.pub
</code></pre></div></li></ol><h3 id="\u6DFB\u52A0\u5230-github-\u7B49\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u5230-github-\u7B49\u4F7F\u7528" aria-hidden="true">#</a> \u6DFB\u52A0\u5230 <code>GITHUB</code> \u7B49\u4F7F\u7528</h3><ol><li><p>\u6253\u5F00\u7EC8\u7AEF.</p></li><li><p>\u590D\u5236 <code>SSH KEY</code>.</p><div class="language-text ext-text"><pre class="language-text"><code>$ pbcopy &lt; ~/.ssh/id_rsa.pub
</code></pre></div></li><li><p>\u5C06 <code>SSH KEY</code> \u9ECF\u8D34\u5230 <code>GITHUB</code> \u7684 <code>SSH KEYS</code> \u8BBE\u7F6E\u9875\u9762\u4E2D</p></li></ol>`,17);function d(c,n){return s}var i=a(t,[["render",d]]);export{i as default};
