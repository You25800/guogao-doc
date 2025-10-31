import{_ as a,c as n,o as p,ae as i}from"./chunks/framework.CBTkueSR.js";const g=JSON.parse('{"title":"Claude Code 现场培训话术（完整版 - 讲师稿）","description":"","frontmatter":{"layout":"doc","sidebar":false},"headers":[],"relativePath":"培训话术-完整版.md","filePath":"培训话术-完整版.md"}'),l={name:"培训话术-完整版.md"};function e(t,s,o,r,h,c){return p(),n("div",null,[...s[0]||(s[0]=[i(`<h1 id="claude-code-现场培训话术-完整版-讲师稿" tabindex="-1">Claude Code 现场培训话术（完整版 - 讲师稿） <a class="header-anchor" href="#claude-code-现场培训话术-完整版-讲师稿" aria-label="Permalink to &quot;Claude Code 现场培训话术（完整版 - 讲师稿）&quot;">​</a></h1><blockquote><p>时长：35-40分钟 | 基于最新教程内容 | 保持内容完整性</p></blockquote><p><strong>使用说明</strong>：</p><ul><li>【】内是动作提示或备注，不要念出来</li><li><em>斜体</em> 是语气或停顿提示</li><li><strong>加粗</strong>是重点，适当放慢语速</li><li>本版本保留了教程的完整知识点</li></ul><hr><h2 id="开场白-3分钟" tabindex="-1">开场白（3分钟） <a class="header-anchor" href="#开场白-3分钟" aria-label="Permalink to &quot;开场白（3分钟）&quot;">​</a></h2><p>【走到投影前，眼神扫视大家】</p><p>大家好！今天咱们花 40 分钟左右的时间，聊一聊怎么更高效地用 Claude Code。</p><p>我先问大家一个问题：<em>（停顿 1 秒）</em> 有没有同事用 AI 写代码的时候，遇到过这种情况？</p><p>【举手示意】</p><p>让 AI 写个功能，结果改来改去十几次，最后发现还不如自己手写快？生成的代码不敢往线上放？</p><p>是吧，我相信很多人都遇到过。<em>（点头，环视）</em></p><p>其实啊，这不是 AI 的问题，而是<strong>方法不对</strong>。</p><p>今天我要分享的，就是一个经过验证的方法，叫<strong>三段式工作流</strong>。用了这个方法之后，效果立竿见影：</p><ul><li><strong>返工次数减少 70%</strong></li><li><strong>Token 成本省一半</strong></li><li><strong>代码质量心里有数</strong></li></ul><p>咱们今天的内容分成四个部分，是吧：</p><table tabindex="0"><thead><tr><th>部分</th><th>内容</th><th>时长</th></tr></thead><tbody><tr><td>第一部分</td><td>为什么要用三段式工作流</td><td>8分钟</td></tr><tr><td>第二部分</td><td>核心语法和技巧</td><td>10分钟</td></tr><tr><td>第三部分</td><td>实战演练（3个场景）</td><td>15分钟</td></tr><tr><td>第四部分</td><td>快速避坑 + 常见问题</td><td>5分钟</td></tr></tbody></table><p>好，咱们开始！</p><hr><h2 id="第一部分-为什么要用三段式工作流-8分钟" tabindex="-1">第一部分：为什么要用三段式工作流（8分钟） <a class="header-anchor" href="#第一部分-为什么要用三段式工作流-8分钟" aria-label="Permalink to &quot;第一部分：为什么要用三段式工作流（8分钟）&quot;">​</a></h2><h3 id="_1-1-传统方式的问题-3分钟" tabindex="-1">1.1 传统方式的问题（3分钟） <a class="header-anchor" href="#_1-1-传统方式的问题-3分钟" aria-label="Permalink to &quot;1.1 传统方式的问题（3分钟）&quot;">​</a></h3><p>来，咱们先看看传统方式有什么问题。</p><p><strong>问题场景</strong>：</p><p>假设你要写个订单功能，直接对 AI 说：</p><blockquote><p>&quot;帮我写一个订单功能&quot;</p></blockquote><p>AI 刷刷刷，<em>（做打字手势）</em> 生成了 500 行代码。</p><p>你一看，哎呀不对啊，还要支持会员折扣呢！</p><blockquote><p>&quot;这个不对，我需要支持会员折扣&quot;</p></blockquote><p>AI 又重新生成了 500 行代码。</p><p>你又发现：还要支持免费次数...</p><blockquote><p>&quot;还要支持免费次数优先扣减...&quot;</p></blockquote><p>AI 再次重新生成...</p><p>就这样来来回回，反反复复的生成，最后代码还不能用。</p><p><strong>这就是传统方式的四大问题</strong>：</p><ul><li>💸 <strong>浪费大量 token</strong> —— 每次重新生成都在烧钱</li><li>🔄 <strong>反复返工</strong> —— 改来改去，效率低</li><li>😰 <strong>代码质量不可控</strong> —— 心里没底，不敢用</li><li>⏰ <strong>效率低下</strong> —— 反而比手写还慢</li></ul><hr><h3 id="_1-2-三段式工作流的优势-2分钟" tabindex="-1">1.2 三段式工作流的优势（2分钟） <a class="header-anchor" href="#_1-2-三段式工作流的优势-2分钟" aria-label="Permalink to &quot;1.2 三段式工作流的优势（2分钟）&quot;">​</a></h3><p>那正确的方式是什么呢？看咱们的<strong>三段式工作流</strong>。</p><p>还是订单功能，这次咱们这么做：</p><p><strong>【分析阶段】</strong> —— 先别着急写代码</p><blockquote><p>&quot;讨论订单功能需求，<strong>不要写代码</strong>&quot;</p></blockquote><p>AI 回复：</p><blockquote><p>&quot;理解需求，识别 4 种计费场景...&quot;</p></blockquote><p>你确认：</p><blockquote><p>&quot;理解正确&quot;</p></blockquote><p><strong>【设计阶段】</strong> —— 选方案</p><blockquote><p>&quot;给出 2-3 个实现方案，<strong>不要写代码</strong>&quot;</p></blockquote><p>AI 给了方案 A、B、C，你选了方案 A。</p><p><strong>【实施阶段】</strong> —— 开始写代码</p><blockquote><p>&quot;采用方案 A，开始编码&quot;</p></blockquote><p>AI 一次性生成符合预期的代码。</p><p><strong>结果呢？</strong></p><ul><li>✅ <strong>一次到位</strong>，减少返工</li><li>✅ <strong>节省 token</strong> —— 成本省 40-60%</li><li>✅ <strong>代码质量可控</strong> —— 心里有数</li><li>✅ <strong>效率大幅提升</strong> —— 对话轮数从 15 轮降到 5 轮</li></ul><hr><h3 id="_1-3-三段式工作流是什么-2分钟" tabindex="-1">1.3 三段式工作流是什么（2分钟） <a class="header-anchor" href="#_1-3-三段式工作流是什么-2分钟" aria-label="Permalink to &quot;1.3 三段式工作流是什么（2分钟）&quot;">​</a></h3><p>好，咱们把三段式工作流具体展开，看看每个阶段做什么。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌─────────────────────────────────────────┐</span></span>
<span class="line"><span>│  阶段 1: 分析 (Analysis)                 │</span></span>
<span class="line"><span>│  目标: 理解现状、评估可行性               │</span></span>
<span class="line"><span>│  关键词: 解释、分析、不要写代码           │</span></span>
<span class="line"><span>│  时长: 1-2 轮对话                        │</span></span>
<span class="line"><span>├─────────────────────────────────────────┤</span></span>
<span class="line"><span>│  阶段 2: 设计 (Design)                   │</span></span>
<span class="line"><span>│  目标: 制定方案、确认需求                 │</span></span>
<span class="line"><span>│  关键词: 讨论、对比、复述、不要写代码      │</span></span>
<span class="line"><span>│  时长: 2-3 轮对话                        │</span></span>
<span class="line"><span>├─────────────────────────────────────────┤</span></span>
<span class="line"><span>│  阶段 3: 实施 (Implementation)           │</span></span>
<span class="line"><span>│  目标: 编写代码、分步执行                 │</span></span>
<span class="line"><span>│  关键词: 采用方案 X、开始编码            │</span></span>
<span class="line"><span>│  时长: 1-N 轮对话（根据复杂度）           │</span></span>
<span class="line"><span>└─────────────────────────────────────────┘</span></span></code></pre></div><p><strong>三个核心原则，大家记住了</strong>：</p><p>【竖起三根手指，逐个指】</p><p><strong>原则 1: 先分析，再设计，后实施</strong></p><ul><li>❌ 不要直接要求写代码</li><li>✅ 先理解现状，讨论方案，最后编码</li></ul><p><strong>原则 2: 关键时刻说&quot;不要写代码&quot;</strong></p><ul><li>分析阶段：必须加</li><li>设计阶段：必须加</li><li>实施阶段：不需要</li></ul><p><strong>原则 3: 使用 @ 精确引用</strong></p><ul><li>❌ &quot;在订单文件的 100 行左右&quot;</li><li>✅ <code>@service/order.go#L100-120</code></li></ul><hr><h3 id="_1-4-效果对比-1分钟" tabindex="-1">1.4 效果对比（1分钟） <a class="header-anchor" href="#_1-4-效果对比-1分钟" aria-label="Permalink to &quot;1.4 效果对比（1分钟）&quot;">​</a></h3><p>最后，咱们用数据说话：</p><table tabindex="0"><thead><tr><th>维度</th><th>传统方式</th><th>三段式工作流</th></tr></thead><tbody><tr><td>返工次数</td><td>3-5 次</td><td>0-1 次</td></tr><tr><td>Token 消耗</td><td>100%</td><td>节省 40-60%</td></tr><tr><td>对话轮数</td><td>15-20 轮</td><td>5-10 轮</td></tr><tr><td>代码质量</td><td>不可控</td><td>可控</td></tr></tbody></table><p><strong>真实案例</strong>：</p><p>任务：为订单接口增加会员折扣逻辑</p><ul><li>传统方式：12 轮对话，3 次重写</li><li>三段式：5 轮对话，一次到位</li></ul><p><strong>节省时间：50%</strong></p><p>好，第一部分到这里。大家对三段式工作流的理念有了解了吧？</p><p><em>（停顿 1-2 秒，观察反应）</em></p><hr><h2 id="第二部分-核心语法和技巧-10分钟" tabindex="-1">第二部分：核心语法和技巧（10分钟） <a class="header-anchor" href="#第二部分-核心语法和技巧-10分钟" aria-label="Permalink to &quot;第二部分：核心语法和技巧（10分钟）&quot;">​</a></h2><p>好，原理咱们懂了。现在教大家具体怎么操作。</p><p>核心就是<strong>四个语法 + 三段式实操模板</strong>。</p><h3 id="_2-1-语法-1-文件引用符-1-5分钟" tabindex="-1">2.1 语法 1：@ 文件引用符（1.5分钟） <a class="header-anchor" href="#_2-1-语法-1-文件引用符-1-5分钟" aria-label="Permalink to &quot;2.1 语法 1：@ 文件引用符（1.5分钟）&quot;">​</a></h3><p>这个符号啊，就像给 AI 指路一样。非常重要！</p><p>来，咱们看两个对比：</p><p><strong>❌ 错误示例</strong>：</p><blockquote><p>&quot;订单文件的第 100 行左右那个函数，改一下&quot;</p></blockquote><p>你猜 AI 会怎么想：</p><ul><li>哪个订单文件？可能有好几个呢</li><li>100 行左右？是 98 还是 102？</li><li>哪个函数？</li></ul><p>AI 懵了，你也懵了。<em>（摊手）</em></p><p><strong>✅ 正确示例</strong>：</p><blockquote><p><code>@service/order.go#L100-120</code> 解释一下这个函数</p></blockquote><p>这下清楚了吧！就像你用手指着代码说：&quot;就是这里！&quot;</p><p><strong>格式记住三个</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@文件路径              # 引用整个文件</span></span>
<span class="line"><span>@文件路径#L50          # 引用第 50 行</span></span>
<span class="line"><span>@文件路径#L50-80       # 引用第 50 到 80 行</span></span></code></pre></div><p>还可以同时引用多个文件：<code>@文件1 @文件2</code></p><p><strong>为什么重要？</strong></p><ul><li>❌ 描述模糊 → AI 可能找错位置</li><li>✅ 精确定位 → 不会出错</li></ul><hr><h3 id="_2-2-语法-2-四个关键修饰符-3-5分钟" tabindex="-1">2.2 语法 2：四个关键修饰符（3.5分钟） <a class="header-anchor" href="#_2-2-语法-2-四个关键修饰符-3-5分钟" aria-label="Permalink to &quot;2.2 语法 2：四个关键修饰符（3.5分钟）&quot;">​</a></h3><p>这四个词啊，就像魔法咒语一样，特别管用。</p><h4 id="修饰符-1-不要写代码" tabindex="-1">修饰符 1: &quot;不要写代码&quot; <a class="header-anchor" href="#修饰符-1-不要写代码" aria-label="Permalink to &quot;修饰符 1: &quot;不要写代码&quot;&quot;">​</a></h4><p>【加重语气】</p><p><strong>用途</strong>：限制 AI 只分析讨论，不生成代码</p><p><strong>使用场景</strong>：分析阶段、设计阶段</p><p><strong>示例</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@service/order.go#L50-100</span></span>
<span class="line"><span>解释一下订单创建的完整流程，不要写代码</span></span></code></pre></div><p>大家记住了，这句话<strong>非常重要</strong>！<em>（加重语气）</em></p><p>不加这句话，AI 就会开始写代码，那你的 token 哗哗就没了，钱啊！</p><hr><h4 id="修饰符-2-先说明" tabindex="-1">修饰符 2: &quot;先说明&quot; <a class="header-anchor" href="#修饰符-2-先说明" aria-label="Permalink to &quot;修饰符 2: &quot;先说明&quot;&quot;">​</a></h4><p><strong>用途</strong>：要求 AI 先给出方案，等确认后再执行</p><p><strong>使用场景</strong>：复杂修改前、风险较高的操作</p><p><strong>示例</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@api/v1/user.go#L50-80</span></span>
<span class="line"><span>删除 deprecated 字段，先说明影响范围，不要写代码</span></span></code></pre></div><p>就像装修房子，师傅得先告诉你怎么改，你点头了他再动手，是吧？</p><hr><h4 id="修饰符-3-直接修改" tabindex="-1">修饰符 3: &quot;直接修改&quot; <a class="header-anchor" href="#修饰符-3-直接修改" aria-label="Permalink to &quot;修饰符 3: &quot;直接修改&quot;&quot;">​</a></h4><p><strong>用途</strong>：跳过讨论，立即执行</p><p><strong>使用场景</strong>：简单操作、已经明确的修改</p><p><strong>示例</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@model/user.go#L20</span></span>
<span class="line"><span>将 UserID 改为 UID，直接修改</span></span></code></pre></div><p>但是注意啊，只有<strong>非常简单、你心里 100% 有数</strong>的时候才用这个。拿不准就别用。</p><hr><h4 id="修饰符-4-think-hard" tabindex="-1">修饰符 4: &quot;think hard&quot; <a class="header-anchor" href="#修饰符-4-think-hard" aria-label="Permalink to &quot;修饰符 4: &quot;think hard&quot;&quot;">​</a></h4><p><strong>用途</strong>：启用深度思考模式，进行更详细的分析和推理</p><p><strong>使用场景</strong>：复杂架构设计、技术选型、难题分析、多方案权衡</p><p><strong>示例</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>讨论支付系统的架构设计方案，不要写代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【需求】</span></span>
<span class="line"><span>- 支持多种支付方式（微信、支付宝、银行卡）</span></span>
<span class="line"><span>- 处理异步回调</span></span>
<span class="line"><span>- 保证事务一致性</span></span>
<span class="line"><span>- 支持退款流程</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【技术要求】</span></span>
<span class="line"><span>- 高并发场景下的性能</span></span>
<span class="line"><span>- 资金安全保障</span></span>
<span class="line"><span>- 易于扩展新的支付方式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>think hard</span></span></code></pre></div><p><strong>什么时候该用？</strong></p><p>✅ <strong>应该使用</strong>：</p><ul><li>复杂的系统架构设计</li><li>需要权衡多个技术方案</li><li>处理复杂的业务逻辑设计</li><li>分析疑难问题的根本原因</li></ul><p>❌ <strong>不需要使用</strong>：</p><ul><li>简单的 CRUD 操作</li><li>已经明确方案的实现</li><li>简单的代码修改</li></ul><p>就像你不会为了买个菜请诸葛亮，是吧？<em>（笑）</em></p><hr><h3 id="_2-3-语法-3-命令符-1分钟" tabindex="-1">2.3 语法 3：/ 命令符（1分钟） <a class="header-anchor" href="#_2-3-语法-3-命令符-1分钟" aria-label="Permalink to &quot;2.3 语法 3：/ 命令符（1分钟）&quot;">​</a></h3><p>【快速带过】</p><p>这个就两个命令，简单：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/clear    # 清空上下文</span></span>
<span class="line"><span>/init     # 初始化项目</span></span></code></pre></div><p><strong>/clear 使用时机</strong>：</p><ul><li>✅ 切换到完全不同的任务</li><li>✅ 上下文超过 50 轮对话</li><li>✅ AI 开始混淆之前的内容</li></ul><p><strong>/init 使用时机</strong>：</p><ul><li>✅ 开始一个新项目或新模块的开发</li><li>✅ 需要 AI 全面了解项目结构和规范</li><li>✅ 首次使用 Claude Code 处理某个代码仓库</li><li>✅ 项目结构或技术栈发生重大变更</li></ul><hr><h3 id="_2-4-语法-4-结构化描述-2分钟" tabindex="-1">2.4 语法 4：结构化描述（2分钟） <a class="header-anchor" href="#_2-4-语法-4-结构化描述-2分钟" aria-label="Permalink to &quot;2.4 语法 4：结构化描述（2分钟）&quot;">​</a></h3><p>这个很重要！咱们用 <strong>【】</strong> 这个符号来组织信息。</p><p><strong>为什么要用？</strong></p><p>你要是一股脑把需求扔给 AI，AI 容易漏掉东西。用结构化描述，就像给 AI 列了个清单。</p><p><strong>示例</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>【需求背景】</span></span>
<span class="line"><span>现有功能管理页面混乱，需要重新设计</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【功能目标】</span></span>
<span class="line"><span>实现统一的功能管理，包括：</span></span>
<span class="line"><span>- 价格配置</span></span>
<span class="line"><span>- 免费次数设置</span></span>
<span class="line"><span>- 平台支持</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【技术要求】</span></span>
<span class="line"><span>- 响应时间 &lt; 500ms</span></span>
<span class="line"><span>- 支持批量导入</span></span>
<span class="line"><span>- 配置变更要有审计日志</span></span></code></pre></div><p>这样一写，清清楚楚，AI 也不会漏掉。</p><p><strong>三个好处</strong>：</p><ul><li>✅ 信息清晰，不遗漏</li><li>✅ AI 更容易理解</li><li>✅ 便于后续追溯</li></ul><hr><h3 id="_2-5-三段式工作流实操模板-2-5分钟" tabindex="-1">2.5 三段式工作流实操模板（2.5分钟） <a class="header-anchor" href="#_2-5-三段式工作流实操模板-2-5分钟" aria-label="Permalink to &quot;2.5 三段式工作流实操模板（2.5分钟）&quot;">​</a></h3><p>好，语法学完了，咱们来看看具体怎么用三段式。</p><p>我给大家三个模板，<strong>记住这三个，基本就够用了</strong>。</p><h4 id="阶段-1-分析模板" tabindex="-1">阶段 1: 分析模板 <a class="header-anchor" href="#阶段-1-分析模板" aria-label="Permalink to &quot;阶段 1: 分析模板&quot;">​</a></h4><p><strong>目标</strong>：理解现状，不要盲目修改</p><p><strong>核心模板</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@{文件}#{行号} 解释一下{功能/逻辑}，不要写代码</span></span></code></pre></div><p><strong>完整示例</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@api/v1/order.go#L50-100</span></span>
<span class="line"><span>解释一下订单创建的完整流程，不要写代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请说明：</span></span>
<span class="line"><span>1. 输入参数和返回值</span></span>
<span class="line"><span>2. 核心步骤分解</span></span>
<span class="line"><span>3. 边界条件处理</span></span>
<span class="line"><span>4. 错误处理方式</span></span></code></pre></div><p><strong>AI 会告诉你</strong>：</p><ul><li>函数的核心逻辑</li><li>关键步骤说明</li><li>边界条件</li><li>潜在问题</li></ul><p><strong>你要做的</strong>：</p><ul><li>确认理解是否正确</li><li>识别遗漏的部分</li><li>决定是否需要看更多代码</li></ul><hr><h4 id="阶段-2-设计模板" tabindex="-1">阶段 2: 设计模板 <a class="header-anchor" href="#阶段-2-设计模板" aria-label="Permalink to &quot;阶段 2: 设计模板&quot;">​</a></h4><p><strong>目标</strong>：制定方案，充分讨论</p><p><strong>核心模板</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>讨论需求，不要写代码</span></span>
<span class="line"><span>{详细需求描述}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请给出 2-3 个实现方案，不要写代码</span></span></code></pre></div><p><strong>完整示例</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>讨论需求，不要写代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【当前功能】</span></span>
<span class="line"><span>订单创建接口，所有用户统一价格</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【需要增加的逻辑】</span></span>
<span class="line"><span>根据用户类型计费：</span></span>
<span class="line"><span>- 场景 1: 免费功能，直接创建订单</span></span>
<span class="line"><span>- 场景 2: 付费功能，优先扣免费次数</span></span>
<span class="line"><span>- 场景 3: 无免费次数，会员按会员价</span></span>
<span class="line"><span>- 场景 4: 非会员按原价</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【技术要求】</span></span>
<span class="line"><span>- 免费次数扣减和订单创建要在同一事务</span></span>
<span class="line"><span>- 会员价 = 原价时，不显示会员标识</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请给出 2-3 个实现方案，不要写代码</span></span></code></pre></div><p><strong>AI 会给你</strong>：</p><ul><li>方案 A、B、C</li><li>每个方案的优缺点</li><li>推荐方案和理由</li></ul><p><strong>你接下来要这样</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>采用方案 B，请详细说明实施步骤，不要写代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>包括：</span></span>
<span class="line"><span>1. 数据查询顺序</span></span>
<span class="line"><span>2. 判断逻辑</span></span>
<span class="line"><span>3. 事务范围</span></span>
<span class="line"><span>4. 返回字段设计</span></span></code></pre></div><hr><h4 id="阶段-3-实施模板" tabindex="-1">阶段 3: 实施模板 <a class="header-anchor" href="#阶段-3-实施模板" aria-label="Permalink to &quot;阶段 3: 实施模板&quot;">​</a></h4><p><strong>目标</strong>：编写代码，分步执行</p><p><strong>核心模板</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>采用方案{X}，开始编码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要求：</span></span>
<span class="line"><span>- 遵循 CLAUDE.md 中的规范</span></span>
<span class="line"><span>- {其他约束条件}</span></span></code></pre></div><p><strong>完整示例</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>采用方案 B，开始编码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【编码规范】</span></span>
<span class="line"><span>- 遵循 CLAUDE.md 中的分层规范</span></span>
<span class="line"><span>- 错误处理统一使用 pkg/errors</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【实施顺序】</span></span>
<span class="line"><span>1. 先完成 Model 层（数据查询）</span></span>
<span class="line"><span>2. 再完成 Service 层（业务逻辑）</span></span>
<span class="line"><span>3. 最后完成 API 层（接口暴露）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>每完成一层暂停，等我确认后继续</span></span></code></pre></div><p><strong>你要做的</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 确认第一层</span></span>
<span class="line"><span>ok，继续 Service 层</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 确认第二层</span></span>
<span class="line"><span>ok，继续 API 层</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 全部完成</span></span>
<span class="line"><span>完美，生成单元测试</span></span></code></pre></div><hr><p>【停顿】</p><p>好，这三个模板，<strong>建议大家记在笔记里</strong>。</p><p>第二部分就到这里。</p><hr><h2 id="第三部分-实战演练-15分钟" tabindex="-1">第三部分：实战演练（15分钟） <a class="header-anchor" href="#第三部分-实战演练-15分钟" aria-label="Permalink to &quot;第三部分：实战演练（15分钟）&quot;">​</a></h2><p>刚才咱们讲了原理和语法，现在来看三个真实场景。</p><h3 id="场景-1-简单逻辑增加-4分钟" tabindex="-1">场景 1：简单逻辑增加（4分钟） <a class="header-anchor" href="#场景-1-简单逻辑增加-4分钟" aria-label="Permalink to &quot;场景 1：简单逻辑增加（4分钟）&quot;">​</a></h3><p><strong>需求</strong>：产品经理来了，说&quot;用户信息接口里，如果用户是会员，额外返回会员等级和过期时间。&quot;</p><p><strong>当前代码</strong>：</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GetUserInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">c</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    userID </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetInt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;user_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user, err </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> model.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetUserByID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(userID)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> err </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(c, err)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(c, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">H</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;user_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: user.ID,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;username&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: user.Username,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;email&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: user.Email,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>复杂度</strong>：🟢 简单（2-3 轮）</p><p><strong>咱们怎么做？</strong></p><h4 id="第-1-轮-理解-设计" tabindex="-1">第 1 轮：理解 + 设计 <a class="header-anchor" href="#第-1-轮-理解-设计" aria-label="Permalink to &quot;第 1 轮：理解 + 设计&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@api/v1/user.go#L50-80</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【当前功能】</span></span>
<span class="line"><span>获取用户基本信息接口</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【需要增加】</span></span>
<span class="line"><span>如果用户是会员，额外返回：</span></span>
<span class="line"><span>- member_level: 会员等级</span></span>
<span class="line"><span>- member_expire_at: 会员过期时间</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【要求】</span></span>
<span class="line"><span>- 非会员用户不返回这些字段</span></span>
<span class="line"><span>- 使用 omitempty 保持向后兼容</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请先：</span></span>
<span class="line"><span>1. 复述当前函数逻辑</span></span>
<span class="line"><span>2. 说明修改建议</span></span>
<span class="line"><span></span></span>
<span class="line"><span>不要写代码</span></span></code></pre></div><p>AI 回复后，你确认理解正确。</p><h4 id="第-2-轮-实施" tabindex="-1">第 2 轮：实施 <a class="header-anchor" href="#第-2-轮-实施" aria-label="Permalink to &quot;第 2 轮：实施&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>方案合理，开始修改</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要求：</span></span>
<span class="line"><span>- 新增字段使用 json:&quot;,omitempty&quot; 标签</span></span>
<span class="line"><span>- 添加注释说明</span></span></code></pre></div><p>AI 生成代码，一次搞定！</p><h4 id="关键要点" tabindex="-1">关键要点 <a class="header-anchor" href="#关键要点" aria-label="Permalink to &quot;关键要点&quot;">​</a></h4><p><em>（总结）</em></p><p>✅ <strong>正确做法</strong>：</p><ul><li>先理解现状</li><li>使用 omitempty 保持兼容性</li><li>分步执行</li></ul><p>❌ <strong>常见错误</strong>：</p><ul><li>直接要求加字段，没理解现有逻辑</li><li>忘记向后兼容</li><li>没有测试非会员场景</li></ul><hr><h3 id="场景-2-bug-修复-5分钟" tabindex="-1">场景 2：Bug 修复（5分钟） <a class="header-anchor" href="#场景-2-bug-修复-5分钟" aria-label="Permalink to &quot;场景 2：Bug 修复（5分钟）&quot;">​</a></h3><p><strong>Bug 现象</strong>：用户在群里 @ 你，说&quot;我创建了一个订单，免费次数怎么少了 2 次？！&quot;</p><p>你一看数据库，确实扣了 2 次。出 Bug 了！</p><p><strong>问题代码</strong>：</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CreateOrder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">userID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">functionID</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 查询免费次数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    usage </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> model.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetUsage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(userID, functionID)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> usage.FreeCount </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 扣减免费次数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        model.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DecrementFreeCount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(userID, functionID)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 创建订单</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    order </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Order</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        UserID: userID,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        FunctionID: functionID,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> model.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CreateOrder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(order)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>复杂度</strong>：🟡 中等（3-4 轮）</p><p><strong>咱们怎么做？</strong></p><h4 id="第-1-轮-问题复现" tabindex="-1">第 1 轮：问题复现 <a class="header-anchor" href="#第-1-轮-问题复现" aria-label="Permalink to &quot;第 1 轮：问题复现&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>遇到以下问题，请帮助定位</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【问题描述】</span></span>
<span class="line"><span>用户创建订单后，免费次数被扣减了 2 次</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【复现步骤】</span></span>
<span class="line"><span>1. 用户有 5 次免费次数</span></span>
<span class="line"><span>2. 创建 1 个订单</span></span>
<span class="line"><span>3. 免费次数变成 3（应该是 4）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【预期行为】</span></span>
<span class="line"><span>创建 1 个订单，免费次数扣减 1 次</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【相关代码】</span></span>
<span class="line"><span>@service/order.go#L100-130</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请分析可能的原因，不要写代码</span></span></code></pre></div><h4 id="第-2-轮-根因分析" tabindex="-1">第 2 轮：根因分析 <a class="header-anchor" href="#第-2-轮-根因分析" aria-label="Permalink to &quot;第 2 轮：根因分析&quot;">​</a></h4><p>AI 给了初步分析后，你继续深入：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>基于代码分析根本原因，不要写代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【分析内容】</span></span>
<span class="line"><span>1. 为什么会扣两次？</span></span>
<span class="line"><span>2. 是否有并发问题？</span></span>
<span class="line"><span>3. 是否缺少事务？</span></span></code></pre></div><p>AI 分析：可能是并发问题，两个请求同时读到了 FreeCount &gt; 0，然后都去扣减了。</p><h4 id="第-3-轮-修复方案" tabindex="-1">第 3 轮：修复方案 <a class="header-anchor" href="#第-3-轮-修复方案" aria-label="Permalink to &quot;第 3 轮：修复方案&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请给出修复方案，不要写代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【方案要求】</span></span>
<span class="line"><span>1. 解决并发问题</span></span>
<span class="line"><span>2. 保证事务一致性</span></span>
<span class="line"><span>3. 最小化改动</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如有多个方案，请对比说明</span></span></code></pre></div><p>AI 给了三个方案：</p><ul><li>方案 A：用数据库事务</li><li>方案 B：用分布式锁</li><li>方案 C：用乐观锁</li></ul><p>你选了方案 A，最简单。</p><h4 id="第-4-轮-实施修复" tabindex="-1">第 4 轮：实施修复 <a class="header-anchor" href="#第-4-轮-实施修复" aria-label="Permalink to &quot;第 4 轮：实施修复&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>采用方案 A（使用事务），开始修复</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要求：</span></span>
<span class="line"><span>- 订单创建和次数扣减在同一事务</span></span>
<span class="line"><span>- 添加错误回滚逻辑</span></span></code></pre></div><p>AI 生成代码，Bug 修复！</p><h4 id="关键要点-1" tabindex="-1">关键要点 <a class="header-anchor" href="#关键要点-1" aria-label="Permalink to &quot;关键要点&quot;">​</a></h4><p><em>（总结）</em></p><p>✅ <strong>正确做法</strong>：</p><ul><li>详细描述问题现象</li><li>分析根本原因</li><li>方案要考虑并发</li><li>使用事务保证一致性</li></ul><p>❌ <strong>常见错误</strong>：</p><ul><li>描述不清晰</li><li>没考虑并发场景</li><li>直接要求改代码，没分析原因</li></ul><hr><h3 id="场景-3-复杂方案选择-6分钟" tabindex="-1">场景 3：复杂方案选择（6分钟） <a class="header-anchor" href="#场景-3-复杂方案选择-6分钟" aria-label="Permalink to &quot;场景 3：复杂方案选择（6分钟）&quot;">​</a></h3><p><strong>需求</strong>：老板发话了，&quot;咱们的计费太单一了，要支持按次、按天、按月、阶梯定价！&quot;</p><p>这可是个大活啊。咱们用三段式，step by step 来。</p><p><strong>当前</strong>：只支持按次计费</p><p><strong>复杂度</strong>：🔴 复杂（4-6 轮）</p><h4 id="第-1-轮-需求讨论" tabindex="-1">第 1 轮：需求讨论 <a class="header-anchor" href="#第-1-轮-需求讨论" aria-label="Permalink to &quot;第 1 轮：需求讨论&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>讨论需求，不要写代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【背景】</span></span>
<span class="line"><span>当前订单系统只支持按次计费</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【新需求】</span></span>
<span class="line"><span>需要支持 4 种计费方式：</span></span>
<span class="line"><span>1. 按次计费（现有）</span></span>
<span class="line"><span>2. 按天计费（24 小时有效）</span></span>
<span class="line"><span>3. 按月计费（30 天有效）</span></span>
<span class="line"><span>4. 阶梯定价（用量越多，单价越低）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【技术要求】</span></span>
<span class="line"><span>- 不能影响现有按次计费的订单</span></span>
<span class="line"><span>- 需要支持未来新增计费方式</span></span>
<span class="line"><span>- 计费逻辑要可配置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请分析：</span></span>
<span class="line"><span>1. 现有架构是否支持</span></span>
<span class="line"><span>2. 需要新增哪些表/字段</span></span>
<span class="line"><span>3. 主要技术难点</span></span></code></pre></div><h4 id="第-2-轮-方案对比" tabindex="-1">第 2 轮：方案对比 <a class="header-anchor" href="#第-2-轮-方案对比" aria-label="Permalink to &quot;第 2 轮：方案对比&quot;">​</a></h4><p>AI 分析完后，你继续：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>基于以上分析，请提供 2-3 个设计方案，不要写代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对比维度：</span></span>
<span class="line"><span>- 实施复杂度</span></span>
<span class="line"><span>- 扩展性</span></span>
<span class="line"><span>- 维护成本</span></span>
<span class="line"><span>- 对现有系统的影响</span></span></code></pre></div><p>AI 给了三个方案：</p><ul><li>方案 A：在原来代码里加 if-else（简单但不优雅）</li><li>方案 B：用策略模式（优雅但要重构）</li><li>方案 C：做成插件式（灵活但复杂）</li></ul><p>你选了方案 B，虽然要重构，但长期看更好维护。</p><h4 id="第-3-轮-详细设计" tabindex="-1">第 3 轮：详细设计 <a class="header-anchor" href="#第-3-轮-详细设计" aria-label="Permalink to &quot;第 3 轮：详细设计&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>采用方案 B（策略模式），请详细说明实施步骤，不要写代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>包括：</span></span>
<span class="line"><span>1. 数据库设计（表结构/字段）</span></span>
<span class="line"><span>2. 代码分层设计</span></span>
<span class="line"><span>3. 如何保证向后兼容</span></span>
<span class="line"><span>4. 实施顺序</span></span></code></pre></div><h4 id="第-4-轮-需求确认" tabindex="-1">第 4 轮：需求确认 <a class="header-anchor" href="#第-4-轮-需求确认" aria-label="Permalink to &quot;第 4 轮：需求确认&quot;">​</a></h4><p><strong>这一步很重要</strong>，确保理解一致：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请复述以下内容，确认理解一致，不要写代码：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 数据库设计</span></span>
<span class="line"><span>2. 计费策略如何选择</span></span>
<span class="line"><span>3. 如何保证现有订单不受影响</span></span>
<span class="line"><span>4. 新增计费方式的流程</span></span></code></pre></div><p>AI 复述一遍，你确认：对！就是这样！</p><h4 id="第-5-6-轮-分步实施" tabindex="-1">第 5-6 轮：分步实施 <a class="header-anchor" href="#第-5-6-轮-分步实施" aria-label="Permalink to &quot;第 5-6 轮：分步实施&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>确认无误，开始编码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【实施顺序】</span></span>
<span class="line"><span>1. 先完成数据库变更</span></span>
<span class="line"><span>2. 再完成计费策略接口</span></span>
<span class="line"><span>3. 实现 4 种计费策略</span></span>
<span class="line"><span>4. 修改订单创建逻辑</span></span>
<span class="line"><span></span></span>
<span class="line"><span>每完成一步暂停</span></span></code></pre></div><p>AI 一步步来，你每步都确认，最后完美完成！</p><h4 id="关键要点-2" tabindex="-1">关键要点 <a class="header-anchor" href="#关键要点-2" aria-label="Permalink to &quot;关键要点&quot;">​</a></h4><p><em>（总结）</em></p><p>✅ <strong>正确做法</strong>：</p><ul><li>充分的需求讨论</li><li>多个方案对比</li><li>详细的设计阶段</li><li>需求复述确认</li><li>分步实施</li></ul><p>❌ <strong>常见错误</strong>：</p><ul><li>没有方案对比就选定方案</li><li>忽略向后兼容性</li><li>没有考虑扩展性</li><li>一次性实现所有功能</li></ul><hr><h2 id="第四部分-快速避坑-常见问题-5分钟" tabindex="-1">第四部分：快速避坑 + 常见问题（5分钟） <a class="header-anchor" href="#第四部分-快速避坑-常见问题-5分钟" aria-label="Permalink to &quot;第四部分：快速避坑 + 常见问题（5分钟）&quot;">​</a></h2><h3 id="_4-1-五个最常见错误-快速过-2分钟" tabindex="-1">4.1 五个最常见错误（快速过，2分钟） <a class="header-anchor" href="#_4-1-五个最常见错误-快速过-2分钟" aria-label="Permalink to &quot;4.1 五个最常见错误（快速过，2分钟）&quot;">​</a></h3><p>最后，咱们来说说前人踩过的坑，大家别再踩了。</p><p>我给大家总结了<strong>五个最常见的错误</strong>，咱们快速过一遍。</p><h4 id="错误-1-没理解就修改" tabindex="-1">错误 1：没理解就修改 <a class="header-anchor" href="#错误-1-没理解就修改" aria-label="Permalink to &quot;错误 1：没理解就修改&quot;">​</a></h4><p>❌ 错误：直接说&quot;帮我在这里加个会员判断逻辑&quot;</p><p>✅ 正确：先让 AI 解释当前逻辑，确认理解后再修改</p><p><strong>教训</strong>：先理解，再动手！</p><hr><h4 id="错误-2-描述不清晰" tabindex="-1">错误 2：描述不清晰 <a class="header-anchor" href="#错误-2-描述不清晰" aria-label="Permalink to &quot;错误 2：描述不清晰&quot;">​</a></h4><p>❌ 错误：&quot;订单文件的第 100 行左右那个函数，改一下&quot;</p><p>✅ 正确：<code>@service/order.go#L100-120</code> 精确引用</p><p><strong>教训</strong>：说话要具体！用 @ 精确引用！</p><hr><h4 id="错误-3-忽略并发安全" tabindex="-1">错误 3：忽略并发安全 <a class="header-anchor" href="#错误-3-忽略并发安全" aria-label="Permalink to &quot;错误 3：忽略并发安全&quot;">​</a></h4><p>❌ 错误：没说明并发场景，AI 生成非并发安全的代码</p><p>✅ 正确：明确说明并发要求，要求使用事务或锁</p><p><strong>教训</strong>：想到并发场景，一定要明确说出来！</p><hr><h4 id="错误-4-破坏兼容性" tabindex="-1">错误 4：破坏兼容性 <a class="header-anchor" href="#错误-4-破坏兼容性" aria-label="Permalink to &quot;错误 4：破坏兼容性&quot;">​</a></h4><p>❌ 错误：直接删除字段，结果线上老版本 App 全崩了</p><p>✅ 正确：先搜索引用、评估影响、给出迁移方案</p><p><strong>教训</strong>：删东西之前，先看看哪些地方在用！</p><hr><h4 id="错误-5-上下文混乱" tabindex="-1">错误 5：上下文混乱 <a class="header-anchor" href="#错误-5-上下文混乱" aria-label="Permalink to &quot;错误 5：上下文混乱&quot;">​</a></h4><p>❌ 错误：聊了 50 轮，AI 开始混淆之前的任务</p><p>✅ 正确：切换任务时用 <code>/clear</code>，并说明上次进度</p><p><strong>教训</strong>：对话长了或切换任务，记得清空上下文！</p><hr><h3 id="_4-2-快速检查清单-1分钟" tabindex="-1">4.2 快速检查清单（1分钟） <a class="header-anchor" href="#_4-2-快速检查清单-1分钟" aria-label="Permalink to &quot;4.2 快速检查清单（1分钟）&quot;">​</a></h3><p>发送提示词之前，快速检查一下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>□ 是否使用 @ 精确引用了文件？</span></span>
<span class="line"><span>□ 分析/设计阶段是否加了&quot;不要写代码&quot;？</span></span>
<span class="line"><span>□ 需求描述是否清晰完整？</span></span>
<span class="line"><span>□ 是否考虑了并发安全？</span></span>
<span class="line"><span>□ 是否考虑了向后兼容？</span></span>
<span class="line"><span>□ 是否使用结构化描述（【】标识）？</span></span>
<span class="line"><span>□ 复杂修改是否先说明方案？</span></span></code></pre></div><p>这几个都打勾了，再发送！</p><hr><h3 id="_4-3-常见问题-2分钟" tabindex="-1">4.3 常见问题（2分钟） <a class="header-anchor" href="#_4-3-常见问题-2分钟" aria-label="Permalink to &quot;4.3 常见问题（2分钟）&quot;">​</a></h3><p>最后，咱们快速过一下三个最常问的问题。</p><h4 id="q1-我应该什么时候使用三段式" tabindex="-1">Q1：我应该什么时候使用三段式？ <a class="header-anchor" href="#q1-我应该什么时候使用三段式" aria-label="Permalink to &quot;Q1：我应该什么时候使用三段式？&quot;">​</a></h4><p><strong>答</strong>：</p><p>✅ <strong>该用的时候</strong>：</p><ul><li>复杂度高于简单修改时</li><li>不确定如何实现时</li><li>涉及多个文件协作时</li></ul><p>❌ <strong>不用的时候</strong>：</p><ul><li>非常简单的操作（如改个变量名）可以直接要求</li></ul><p><strong>经验</strong>：拿不准就用三段式，不会错！</p><hr><h4 id="q2-每次都要走完三个阶段吗" tabindex="-1">Q2：每次都要走完三个阶段吗？ <a class="header-anchor" href="#q2-每次都要走完三个阶段吗" aria-label="Permalink to &quot;Q2：每次都要走完三个阶段吗？&quot;">​</a></h4><p><strong>答</strong>：不一定！看复杂度，是吧。</p><ul><li><p><strong>简单任务</strong>：分析 + 实施（2 轮）</p><ul><li>例：加个字段</li></ul></li><li><p><strong>中等任务</strong>：分析 + 设计 + 实施（3-5 轮）</p><ul><li>例：加个会员判断</li></ul></li><li><p><strong>复杂任务</strong>：完整三段式（6-10 轮）</p><ul><li>例：重构计费系统</li></ul></li></ul><p><strong>灵活点</strong>，别死板！</p><hr><h4 id="q3-ai-理解错了怎么办" tabindex="-1">Q3：AI 理解错了怎么办？ <a class="header-anchor" href="#q3-ai-理解错了怎么办" aria-label="Permalink to &quot;Q3：AI 理解错了怎么办？&quot;">​</a></h4><p><strong>答</strong>：用纠错模板：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>不对，{错误在哪里}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确理解应该是：</span></span>
<span class="line"><span>{详细说明}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请先复述正确的理解，然后重新{操作}</span></span></code></pre></div><p><strong>例子</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>不对，我不是要删除这个字段，是要改名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确理解应该是：</span></span>
<span class="line"><span>把 UserID 改名为 UID，但要保持向后兼容</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请先复述正确的理解，然后重新给出方案</span></span></code></pre></div><hr><h2 id="总结-2分钟" tabindex="-1">总结（2分钟） <a class="header-anchor" href="#总结-2分钟" aria-label="Permalink to &quot;总结（2分钟）&quot;">​</a></h2><p>好，咱们今天的分享就到这里。</p><p><strong>最后总结三个关键点：</strong></p><p>【竖起三根手指】</p><ol><li><strong>三段式工作流</strong> —— 先分析，再设计，后实施</li><li><strong>精确引用</strong> —— 用 @ 指定文件和行号</li><li><strong>不要写代码</strong> —— 分析和设计阶段一定要加这句话</li></ol><p><strong>最重要的是</strong>：马上去实践！<em>（加重语气）</em></p><p>从明天开始，找个小任务，用三段式走一遍。我相信，一周后你会回来感谢我：</p><p><em>（笑）</em> &quot;天啊，效率真的提升了！下班时间提前了 1 小时！&quot;</p><p>【停顿】</p><p>还有几分钟，大家有什么问题吗？</p><p>【等待提问，准备应对】</p><hr><h2 id="附-现场答疑备用话术" tabindex="-1">附：现场答疑备用话术 <a class="header-anchor" href="#附-现场答疑备用话术" aria-label="Permalink to &quot;附：现场答疑备用话术&quot;">​</a></h2><h3 id="如果有人问-为什么不直接让-ai-写" tabindex="-1">如果有人问：为什么不直接让 AI 写？ <a class="header-anchor" href="#如果有人问-为什么不直接让-ai-写" aria-label="Permalink to &quot;如果有人问：为什么不直接让 AI 写？&quot;">​</a></h3><p><strong>答</strong>：</p><p>好问题！直接让 AI 写，看起来快，但实际上：</p><ol><li>AI 不理解你的真实需求，容易理解偏</li><li>生成的代码可能不符合你的架构</li><li>返工的成本比前期讨论高得多</li></ol><p>三段式看起来多了两步，但实际上是<strong>磨刀不误砍柴工</strong>。</p><p>前期花 5 分钟讨论，能省后期 1 小时的返工。</p><hr><h3 id="如果有人问-我们团队人多-怎么统一" tabindex="-1">如果有人问：我们团队人多，怎么统一？ <a class="header-anchor" href="#如果有人问-我们团队人多-怎么统一" aria-label="Permalink to &quot;如果有人问：我们团队人多，怎么统一？&quot;">​</a></h3><p><strong>答</strong>：</p><p>建议做两件事：</p><ol><li><p><strong>建立 CLAUDE.md 文件</strong></p><ul><li>记录项目规范、架构、常用命令</li><li>AI 会自动读取，生成符合规范的代码</li></ul></li><li><p><strong>建立提示词模板库</strong></p><ul><li>把常用的提示词模板整理成文档</li><li>团队成员直接复制使用</li></ul></li></ol><p>今天分享的三个模板，就是个很好的起点。</p><hr><h3 id="如果有人问-claude-code-和-cursor-有什么区别" tabindex="-1">如果有人问：Claude Code 和 Cursor 有什么区别？ <a class="header-anchor" href="#如果有人问-claude-code-和-cursor-有什么区别" aria-label="Permalink to &quot;如果有人问：Claude Code 和 Cursor 有什么区别？&quot;">​</a></h3><p><strong>答</strong>：</p><p>这个问题问得好。简单说：</p><p><strong>Cursor</strong>：</p><ul><li>更轻量，集成在编辑器里</li><li>适合快速补全、小范围修改</li></ul><p><strong>Claude Code</strong>：</p><ul><li>对话式交互，适合复杂任务</li><li>支持深度思考模式（think hard）</li><li>上下文更长，适合大型重构</li></ul><p><strong>建议</strong>：</p><ul><li>简单补全 → Cursor</li><li>复杂功能、架构设计 → Claude Code</li></ul><p>不是二选一，而是配合使用。</p><hr><p><strong>【培训结束】</strong></p><p>【鼓掌】</p><p>好，今天的分享就到这里。会后我会把文档发到群里，大家可以随时查阅。</p><p><strong>加油，各位！咱们一起提升效率，准点下班！</strong></p>`,364)])])}const u=a(l,[["render",e]]);export{g as __pageData,u as default};
