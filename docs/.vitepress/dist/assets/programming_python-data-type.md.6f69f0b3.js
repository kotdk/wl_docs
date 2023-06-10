import{_ as s,o as a,c as n,V as l}from"./chunks/framework.7ae304b1.js";const C=JSON.parse('{"title":"数据类型","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"programming/python-data-type.md","filePath":"programming/python-data-type.md"}'),p={name:"programming/python-data-type.md"},o=l(`<h1 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to &quot;数据类型&quot;">​</a></h1><h2 id="int-整形" tabindex="-1">Int 整形 <a class="header-anchor" href="#int-整形" aria-label="Permalink to &quot;Int 整形&quot;">​</a></h2><h2 id="bool-布尔" tabindex="-1">Bool 布尔 <a class="header-anchor" href="#bool-布尔" aria-label="Permalink to &quot;Bool 布尔&quot;">​</a></h2><h2 id="str-字符串" tabindex="-1">Str 字符串 <a class="header-anchor" href="#str-字符串" aria-label="Permalink to &quot;Str 字符串&quot;">​</a></h2><h2 id="list-列表" tabindex="-1">List 列表 <a class="header-anchor" href="#list-列表" aria-label="Permalink to &quot;List 列表&quot;">​</a></h2><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">list</span></span>
<span class="line"><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">                 </span><span style="color:#676E95;font-style:italic;"># 列表中的第 i 项，起始</span></span>
<span class="line"><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">               </span><span style="color:#676E95;font-style:italic;"># 按索引从i到 j 切片，前取后不</span></span>
<span class="line"><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">k</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;font-style:italic;"># 以 k 步长从索引 i 到 j 切片</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">            </span><span style="color:#676E95;font-style:italic;"># 列表长度</span></span>
<span class="line"><span style="color:#82AAFF;">min</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">            </span><span style="color:#676E95;font-style:italic;"># 列表中最小项</span></span>
<span class="line"><span style="color:#82AAFF;">max</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">            </span><span style="color:#676E95;font-style:italic;"># 列表中最大项</span></span>
<span class="line"><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sort</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">          </span><span style="color:#676E95;font-style:italic;"># 以列表项的 unicode 排序</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">index</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">x</span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">j</span><span style="color:#89DDFF;">])</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 列表中第一个 x 的索引，可选在索引 i 或其后到 j 之前</span></span>
<span class="line"><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">count</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">x</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># x 在列表中的数量</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 添加</span></span>
<span class="line"><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">insert</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 插入</span></span>
<span class="line"><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">extend</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 扩展</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">del</span><span style="color:#A6ACCD;"> list</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">          </span><span style="color:#676E95;font-style:italic;"># 删除</span></span>
<span class="line"><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">x</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;"># 删除列表中的第一个 x</span></span>
<span class="line"><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">          </span><span style="color:#676E95;font-style:italic;"># 提取出索引为 i 的项，并从列表中删除</span></span>
<span class="line"><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clear</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">         </span><span style="color:#676E95;font-style:italic;"># 移除所有项</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reverse</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;"># 逆序列表元素</span></span></code></pre></div><ul><li>list - for</li></ul><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># for循环编辑list中内容需倒序，正序增减会导致部分项被跳过</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">)-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    item </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> list</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> item</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">del</span><span style="color:#A6ACCD;"> list</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]</span></span></code></pre></div><h2 id="tuple-元组" tabindex="-1">Tuple 元组 <a class="header-anchor" href="#tuple-元组" aria-label="Permalink to &quot;Tuple 元组&quot;">​</a></h2><h2 id="dict-字典" tabindex="-1">Dict 字典 <a class="header-anchor" href="#dict-字典" aria-label="Permalink to &quot;Dict 字典&quot;">​</a></h2><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">dict</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 字典中所有键的列表</span></span>
<span class="line"><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">dict</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">                 </span><span style="color:#676E95;font-style:italic;"># 字典的项数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">                    </span><span style="color:#676E95;font-style:italic;"># 字典中以 key 为键的项，如不存在会引发 KeyError</span></span>
<span class="line"><span style="color:#FFCB6B;">dict</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">key</span><span style="color:#89DDFF;">[,</span><span style="color:#82AAFF;">default</span><span style="color:#89DDFF;">])</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 如果 key 存在于字典中则返回 key 的值，否则返回 default。 如果 default 未给出则默认为 None，因而此方法绝不会引发 KeyError</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">del</span><span style="color:#A6ACCD;"> d</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 删除</span></span>
<span class="line"><span style="color:#FFCB6B;">dict</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clear</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">              </span><span style="color:#676E95;font-style:italic;"># 移除字典中的所有元素</span></span>
<span class="line"><span style="color:#FFCB6B;">dict</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">key</span><span style="color:#89DDFF;">[,</span><span style="color:#82AAFF;">default</span><span style="color:#89DDFF;">])</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># 如果 key 存在于字典中则将其移除并返回其值，否则返回 default。 如果 default 未给出且 key 不存在于字典中，则会引发 KeyError</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">key </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> d</span></span>
<span class="line"><span style="color:#A6ACCD;">key </span><span style="color:#89DDFF;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> d</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">iter</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">dict</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 返回以字典的键为元素的迭代器，等于 iter(d.keys())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">dict</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">copy</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">               </span><span style="color:#676E95;font-style:italic;"># 返回原字典的浅拷贝</span></span></code></pre></div><h2 id="set-集合" tabindex="-1">Set 集合 <a class="header-anchor" href="#set-集合" aria-label="Permalink to &quot;Set 集合&quot;">​</a></h2><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#A6ACCD;">s </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">set</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">                 </span><span style="color:#676E95;font-style:italic;"># 定义一个集合，不能直接()，若不加set则为定义空字典</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">set</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">                 </span><span style="color:#676E95;font-style:italic;">#添加</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">s3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> s1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">intersection</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">s2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 两个集合的交集，等同于 s3 = s1 &amp; s2</span></span>
<span class="line"><span style="color:#A6ACCD;">s3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> s1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">union</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">s2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">         </span><span style="color:#676E95;font-style:italic;"># 并集，等同于 s3 = s1 | s2</span></span>
<span class="line"><span style="color:#A6ACCD;">s3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> s1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">difference</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">s2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 差集，s1 中有但 s2 没有的值，等同于 s3 = s1 - s2</span></span></code></pre></div><p>不允许重复，可用于去重，int、list、dict都可以转换为集合</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">s </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">set</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>集合中的元素必须可哈希，可哈希的数据类型：int、bool、str、tuple，list 和 dict 不可哈希</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">v1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">set</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">v1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">你好</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 1. 利用哈希函数将“你好”转换成一个数值，如 123</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 2. 取余数，如 123 % 7 = 4</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 3. 将“你好”放在哈希表的 4 索引位置</span></span></code></pre></div><h2 id="float-浮点" tabindex="-1">Float 浮点 <a class="header-anchor" href="#float-浮点" aria-label="Permalink to &quot;Float 浮点&quot;">​</a></h2><h2 id="none" tabindex="-1">None <a class="header-anchor" href="#none" aria-label="Permalink to &quot;None&quot;">​</a></h2><p>特殊值，表示空或无内容，相当于 null，在一定程度上节省内存</p>`,20),t=[o];function e(c,r,y,F,i,D){return a(),n("div",null,t)}const d=s(p,[["render",e]]);export{C as __pageData,d as default};