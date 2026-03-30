export interface HelpGuideEn {
  slug: string
  slugEs: string
  title: string
  category: string
  description: string
  content: string
}

export const helpCategoriesEn = [
  { id: 'getting-started', label: 'Getting Started', icon: '🚀' },
  { id: 'testimonials', label: 'Testimonials', icon: '💬' },
  { id: 'widget', label: 'Widget', icon: '🧩' },
  { id: 'mini-site', label: 'Mini Site', icon: '🌐' },
  { id: 'automation', label: 'Automation', icon: '⚡' },
  { id: 'analytics', label: 'Analytics', icon: '📊' },
  { id: 'integrations', label: 'Integrations', icon: '🔗' },
  { id: 'billing', label: 'Billing', icon: '💳' },
]

export const helpGuidesEn: HelpGuideEn[] = [
  {
    slug: 'getting-started',
    slugEs: 'primeros-pasos',
    title: 'Getting started with Opinafy',
    category: 'getting-started',
    description: 'Learn how to create your account, set up your first project, and collect your first testimonial.',
    content: `
<h2 id="create-account">Create your Opinafy account</h2>
<p>Getting started with Opinafy is quick and free. No credit card required.</p>
<h3>Step 1: Sign up</h3>
<ol>
<li>Go to <a href="https://opinafy.com/en/register">opinafy.com/en/register</a> or click <strong>"Get Started Free"</strong> on any page.</li>
<li>Enter your name, email, and a secure password.</li>
<li>Click <strong>"Create account"</strong>.</li>
<li>You will receive a verification email. Click the link to activate your account.</li>
</ol>
<p>You can also sign up with Google for faster access.</p>

<h3>Step 2: Complete your profile</h3>
<p>Once inside the dashboard, we recommend completing your profile:</p>
<ul>
<li><strong>Company name:</strong> This appears on your collection forms and mini site.</li>
<li><strong>Logo:</strong> Upload your company logo to personalize the experience.</li>
<li><strong>Website URL:</strong> Needed to configure the widget correctly.</li>
<li><strong>Username:</strong> Used for your mini site URL (opinafy.com/s/your-username).</li>
</ul>

<h2 id="create-project">Create your first project</h2>
<p>Projects are how you organize your testimonials. You can have one project per product, service, or brand.</p>
<h3>How to create a project</h3>
<ol>
<li>In the dashboard, click <strong>"New Project"</strong>.</li>
<li>Give your project a <strong>name</strong> (e.g., "My Online Store", "SEO Consulting").</li>
<li>Optionally, add a <strong>description</strong> to remember what it is for.</li>
<li>Click <strong>"Create"</strong>.</li>
</ol>
<p>Your project will be created with a <strong>unique slug</strong> (URL-friendly name) based on the name. This slug is used in the collection link and widget code.</p>

<h3>Plan limits</h3>
<ul>
<li><strong>Free:</strong> 1 project, up to 10 testimonials</li>
<li><strong>Mini Site:</strong> 1 project, up to 20 testimonials</li>
<li><strong>Pro:</strong> 10 projects, unlimited testimonials</li>
<li><strong>Business:</strong> Unlimited projects, unlimited testimonials</li>
</ul>

<h2 id="customize-form">Customize your collection form</h2>
<p>Each project has a public form where your customers can leave their testimonials.</p>
<h3>Customization options</h3>
<ul>
<li><strong>Custom title:</strong> Change the welcome message on the form.</li>
<li><strong>Guiding questions:</strong> Add specific questions that help your customers write better testimonials (e.g., "What problem did I solve for you?", "Would you recommend this service?").</li>
<li><strong>Optional fields:</strong> Enable or disable fields like company, job title, website, phone.</li>
<li><strong>Logo and colors:</strong> Your logo appears automatically on the form.</li>
<li><strong>Multimedia:</strong> Allow your customers to upload photos, record audio or video (depending on your plan).</li>
</ul>

<h2 id="share-link">Share your collection link</h2>
<p>Once you create a project, you will have a unique link to collect testimonials:</p>
<p><code>https://opinafy.com/p/your-username/project-name</code></p>
<h3>Ways to share</h3>
<ul>
<li><strong>Direct link:</strong> Copy and share it via email, WhatsApp, or social media.</li>
<li><strong>QR code:</strong> Automatically generated from the dashboard. Download it in PNG or SVG. Ideal for physical businesses.</li>
<li><strong>Email:</strong> Use the included email templates to request testimonials professionally.</li>
<li><strong>WhatsApp:</strong> Share directly with a predefined message.</li>
</ul>

<h2 id="approve-testimonial">Approve your first testimonial</h2>
<p>When a customer leaves a testimonial, it appears in your dashboard with a <strong>"Pending"</strong> status.</p>
<h3>Approval process</h3>
<ol>
<li>Go to your project in the dashboard.</li>
<li>You will see pending testimonials in the corresponding tab.</li>
<li>Read the testimonial and decide:</li>
</ol>
<ul>
<li><strong>Approve:</strong> The testimonial will be visible on your widget and mini site.</li>
<li><strong>Reject:</strong> The testimonial is archived and not shown publicly.</li>
<li><strong>Pin:</strong> Mark the testimonial as featured so it appears first.</li>
</ul>
<p>You receive an <strong>email notification</strong> every time a new testimonial arrives, so you can act quickly.</p>

<h3>Tips for getting started</h3>
<ul>
<li>Start by asking your 5-10 best customers for testimonials. They are most likely to respond.</li>
<li>Customize the guiding questions to get more detailed and useful testimonials.</li>
<li>Publicly respond to testimonials to show you value your customers' opinions.</li>
<li>Install the widget on your website as soon as possible: even 2-3 testimonials already build trust.</li>
</ul>
`,
  },
  {
    slug: 'collecting-testimonials',
    slugEs: 'recopilar-testimonios',
    title: 'Collecting testimonials',
    category: 'testimonials',
    description: 'All the ways to collect testimonials: forms, QR codes, WhatsApp, email, import, and automation.',
    content: `
<h2 id="public-form">Public collection form</h2>
<p>Each project in Opinafy has a public form accessible from a unique URL. Your customers can access it without signing up or logging in.</p>
<h3>What the form includes</h3>
<ul>
<li><strong>Stars (1-5):</strong> Quick and visual rating.</li>
<li><strong>Testimonial text:</strong> Open field for your customer to write their experience.</li>
<li><strong>Name:</strong> Required to verify identity.</li>
<li><strong>Email:</strong> Optional but recommended for verification.</li>
<li><strong>Company and title:</strong> Optional fields that add credibility to the testimonial.</li>
<li><strong>Profile photo:</strong> The customer can upload their photo.</li>
<li><strong>Audio/Video:</strong> Depending on your plan, the customer can record an audio or video testimonial.</li>
</ul>

<h2 id="qr-codes">QR Codes</h2>
<p>Opinafy automatically generates a QR code for each project. It is perfect for businesses with a physical presence.</p>
<h3>How to use it</h3>
<ol>
<li>Go to your project and click <strong>"Share"</strong>.</li>
<li>Download the QR in PNG or SVG format.</li>
<li>Print it and place it at:</li>
</ol>
<ul>
<li>The counter or cash register</li>
<li>Business cards</li>
<li>Printed invoices or quotes</li>
<li>Packaging</li>
<li>Signs in your store or office</li>
</ul>
<p>When a customer scans the QR with their phone, it opens your collection form directly.</p>

<h2 id="whatsapp">Sharing via WhatsApp</h2>
<p>From each project's dashboard, you can share the collection link directly via WhatsApp.</p>
<h3>How it works</h3>
<ol>
<li>Click the <strong>"Share via WhatsApp"</strong> button.</li>
<li>WhatsApp will open with a predefined message that includes the link to your form.</li>
<li>Select the contact or group you want to send it to.</li>
</ol>
<p>The default message is professional and friendly, but you can edit it before sending.</p>

<h2 id="email-templates">Email templates for requesting testimonials</h2>
<p>Opinafy includes <strong>6 professional email templates</strong> that you can copy and customize to request testimonials from your customers.</p>
<h3>Available templates</h3>
<ol>
<li><strong>After a purchase:</strong> Ideal for ecommerce. Send it 3-7 days after delivery.</li>
<li><strong>After a service:</strong> For freelancers, consultants, and agencies. Send it when the project is completed.</li>
<li><strong>Friendly follow-up:</strong> A gentle reminder for customers who did not respond the first time.</li>
<li><strong>Recurring customer:</strong> For loyal customers who have been with you for a while.</li>
<li><strong>After a positive interaction:</strong> When a customer gives you positive feedback through another channel.</li>
<li><strong>Special incentive:</strong> Offer a small discount or benefit in exchange for a testimonial.</li>
</ol>
<p>Each template includes the link to your collection form and can be customized with the customer's name and your company name.</p>

<h2 id="automation">Request automation</h2>
<p>With the Pro and Business plans, you can automate testimonial requests using <strong>webhooks</strong>.</p>
<h3>Available integrations</h3>
<ul>
<li><strong>Zapier:</strong> Connect Opinafy with 5,000+ apps. Example: when an order is marked as delivered in Shopify, automatically send an email requesting a testimonial.</li>
<li><strong>Make (Integromat):</strong> Create visual workflows to automate requests.</li>
<li><strong>n8n:</strong> For those who prefer a self-hosted solution.</li>
</ul>
<p>You can also use the webhook URL directly from your own backend to send programmatic requests.</p>

<h2 id="import">Import existing testimonials</h2>
<p>If you already have testimonials on other platforms, you can import them to Opinafy.</p>
<h3>Supported import sources</h3>
<ul>
<li><strong>Google Business:</strong> Import your Google reviews directly.</li>
<li><strong>TripAdvisor:</strong> Copy and add your best TripAdvisor reviews.</li>
<li><strong>Trustpilot:</strong> Bring over your existing reviews.</li>
<li><strong>Facebook:</strong> Import recommendations from your Facebook page.</li>
<li><strong>Manual:</strong> Add testimonials one by one from the dashboard (useful for testimonials received via email or chat).</li>
</ul>
<h3>How to import manually</h3>
<ol>
<li>Go to your project and click <strong>"Add testimonial"</strong>.</li>
<li>Fill in the fields: name, email, text, stars.</li>
<li>Check the <strong>"Imported testimonial"</strong> box so it is identified correctly.</li>
<li>The testimonial will be added as approved directly.</li>
</ol>

<h3>Best practices for collecting testimonials</h3>
<ul>
<li><strong>Ask at the right time:</strong> Right after a positive experience, when the memory is fresh.</li>
<li><strong>Be specific:</strong> Guiding questions help get more detailed and useful testimonials.</li>
<li><strong>Make it easy:</strong> The fewer steps the customer has to take, the more testimonials you will receive.</li>
<li><strong>Do not get discouraged:</strong> The typical response rate is 10-20%. The more you ask, the more you will receive.</li>
<li><strong>Offer multiple channels:</strong> Some customers prefer to write, others to record audio or video.</li>
</ul>
`,
  },
  {
    slug: 'managing-testimonials',
    slugEs: 'gestionar-testimonios',
    title: 'Managing testimonials',
    category: 'testimonials',
    description: 'Learn how to approve, reject, pin, respond to, and verify testimonials in Opinafy.',
    content: `
<h2 id="approve-reject">Approving and rejecting testimonials</h2>
<p>All testimonials go through a moderation process before becoming publicly visible. This gives you full control over what is displayed on your website.</p>
<h3>Testimonial states</h3>
<ol>
<li><strong>Pending verification (pending_verification):</strong> The testimonial just arrived and is waiting for email verification from the author (if enabled).</li>
<li><strong>Pending (pending):</strong> The email has been verified (or verification was not enabled). The testimonial awaits your approval.</li>
<li><strong>Approved (approved):</strong> You have approved the testimonial. It is visible on your widget and mini site.</li>
<li><strong>Rejected (rejected):</strong> You have rejected the testimonial. It is not publicly visible but is saved in your dashboard.</li>
</ol>

<h3>How to approve or reject</h3>
<ol>
<li>Go to <strong>Projects &gt; Your project &gt; Testimonials</strong>.</li>
<li>Filter by <strong>"Pending"</strong> status to see those that need attention.</li>
<li>For each testimonial, you have <strong>Approve</strong> and <strong>Reject</strong> buttons.</li>
<li>You can also approve or reject in bulk by selecting multiple testimonials.</li>
</ol>

<h2 id="pin">Pinning testimonials</h2>
<p>Pinned testimonials appear first on your widget and mini site. It is a way to give visibility to your most powerful testimonials.</p>
<h3>How to pin a testimonial</h3>
<ul>
<li>Click the <strong>star/pin icon</strong> next to the approved testimonial.</li>
<li>Pinned testimonials are displayed with a special indicator.</li>
<li>You can pin as many as you want, but we recommend 3-5 per project.</li>
</ul>

<h2 id="respond">Responding publicly</h2>
<p>You can publicly respond to any approved testimonial. The response will appear below the testimonial on your widget and mini site.</p>
<h3>Why respond</h3>
<ul>
<li>Shows that you value your customers' opinions.</li>
<li>Humanizes your brand.</li>
<li>Allows you to clarify or add context.</li>
<li>Improves engagement and perception from other visitors.</li>
</ul>
<h3>How to respond</h3>
<ol>
<li>Open the testimonial in your dashboard.</li>
<li>Write your response in the <strong>"Public response"</strong> field.</li>
<li>Click <strong>"Save"</strong>. The response will be visible immediately.</li>
</ol>

<h2 id="email-verification">Email verification</h2>
<p>Email verification adds a layer of trust to your testimonials. When enabled, the author receives an email to confirm the testimonial is theirs.</p>
<h3>How it works</h3>
<ol>
<li>The customer leaves a testimonial and enters their email.</li>
<li>They receive an email with a verification link.</li>
<li>When they click it, the testimonial moves from <strong>"pending_verification"</strong> to <strong>"pending"</strong>.</li>
<li>You approve or reject it as usual.</li>
</ol>
<p>Verified testimonials display an <strong>"Email verified" badge</strong> on the widget, which increases credibility.</p>

<h2 id="company-verification">Company verification</h2>
<p>If the author includes a corporate email (not Gmail, Hotmail, etc.), Opinafy automatically verifies that the domain matches the indicated company's website.</p>
<p>Testimonials with verified company show an <strong>additional verification badge</strong> that increases trust.</p>

<h2 id="sentiment-analysis">Sentiment analysis</h2>
<p>Opinafy automatically analyzes the sentiment of each testimonial using artificial intelligence.</p>
<h3>Sentiment categories</h3>
<ul>
<li><strong>Positive:</strong> The testimonial expresses satisfaction and recommendation.</li>
<li><strong>Neutral:</strong> The testimonial is balanced or factual without strong emotions.</li>
<li><strong>Negative:</strong> The testimonial expresses dissatisfaction or complaints.</li>
</ul>
<p>Sentiment analysis helps you:</p>
<ul>
<li>Quickly identify problematic testimonials.</li>
<li>Filter testimonials by sentiment.</li>
<li>Understand overall customer satisfaction.</li>
<li>Make more informed approval decisions.</li>
</ul>

<h2 id="full-flow">Full testimonial flow</h2>
<p>This is the complete journey of a testimonial from creation to appearing on your website:</p>
<ol>
<li><strong>The customer accesses the form</strong> (via link, QR, WhatsApp, or email).</li>
<li><strong>Fills out the form</strong> with their rating, text, name, and optional details.</li>
<li><strong>If email verification is enabled:</strong> they receive an email and confirm. State: <code>pending_verification</code> &rarr; <code>pending</code>.</li>
<li><strong>If verification is not enabled:</strong> goes directly to <code>pending</code>.</li>
<li><strong>You receive a notification</strong> via email that a new testimonial has arrived.</li>
<li><strong>You review and approve</strong> the testimonial. State: <code>pending</code> &rarr; <code>approved</code>.</li>
<li><strong>The testimonial appears</strong> automatically on your widget, mini site, and wherever you have the code installed.</li>
</ol>

<h3>Management tips</h3>
<ul>
<li>Review pending testimonials at least once a day.</li>
<li>Pin testimonials that include specific results or numbers.</li>
<li>Always respond to negative testimonials professionally.</li>
<li>Use dashboard filters to efficiently manage large volumes.</li>
</ul>
`,
  },
  {
    slug: 'configuring-widget',
    slugEs: 'configurar-widget',
    title: 'Configuring the testimonial widget',
    category: 'widget',
    description: 'Choose a template, customize colors, configure layouts, and embed the widget on your site with one line.',
    content: `
<h2 id="choose-template">Choosing a template</h2>
<p>Opinafy offers <strong>over 100 widget templates</strong> organized by style and use case.</p>
<h3>Template types</h3>
<ul>
<li><strong>Classic:</strong> Clean, professional designs for any industry.</li>
<li><strong>Modern:</strong> With gradients, shadows, and contemporary visual effects.</li>
<li><strong>Minimalist:</strong> For websites that prioritize simplicity.</li>
<li><strong>Creative:</strong> 15 templates with unique and eye-catching designs.</li>
<li><strong>Dark:</strong> Perfect for websites with dark backgrounds.</li>
</ul>
<p>You can preview all templates at <a href="https://opinafy.com/en/templates">opinafy.com/en/templates</a> before choosing.</p>

<h2 id="customize">Customizing colors and typography</h2>
<p>Each template is fully customizable to match your brand identity.</p>
<h3>Customization options</h3>
<ul>
<li><strong>Background color:</strong> Of the widget container.</li>
<li><strong>Card color:</strong> Of each individual testimonial card.</li>
<li><strong>Text color:</strong> Of the name, content, and metadata.</li>
<li><strong>Star color:</strong> Customize the color of the ratings.</li>
<li><strong>Accent color:</strong> For borders, badges, and decorative elements.</li>
<li><strong>Typography:</strong> Choose from hundreds of Google Fonts. The widget loads them automatically.</li>
<li><strong>Border radius:</strong> Adjust the roundness of the cards.</li>
<li><strong>Shadows:</strong> Enable or disable card shadows.</li>
</ul>

<h2 id="layouts">The 7 available layouts</h2>
<p>Choose the layout that best fits your website and available space:</p>
<h3>1. Carousel</h3>
<p>Displays testimonials in a horizontal carousel with arrow navigation or autoplay. Ideal for narrow sections or showing many testimonials without taking vertical space.</p>
<h3>2. Grid</h3>
<p>Displays testimonials in a responsive grid. Automatically adapts to available width (1, 2, or 3 columns). Ideal for dedicated testimonial pages.</p>
<h3>3. Wall (Masonry)</h3>
<p>Pinterest-style design where testimonials are organized in variable-height columns. Each card takes its natural content height. Ideal for showing testimonials of different lengths.</p>
<h3>4. Single</h3>
<p>Shows one testimonial at a time with a smooth transition between them. Ideal for hero sections or sidebars where space is limited.</p>
<h3>5. Badge</h3>
<p>A compact badge-style widget that shows the average rating and number of testimonials. Perfect for placing in headers, next to your logo, or as trust buttons.</p>
<h3>6. Popup FOMO</h3>
<p>Shows testimonials as popup notifications in the bottom corner of the screen. They appear periodically to create urgency and social proof. Ideal for ecommerce and conversion landing pages.</p>
<h3>7. Marquee</h3>
<p>Testimonials scroll horizontally continuously, like a news ticker. Ideal for client logo sections or as a trust banner.</p>

<h2 id="embed-code">Embed code (one line)</h2>
<p>Installing the widget on your website is as easy as copying and pasting one line of code:</p>
<pre><code>&lt;div data-opinafy="your-project-slug" data-template="template-name"&gt;&lt;/div&gt;
&lt;script src="https://opinafy.com/widget.js" async&gt;&lt;/script&gt;</code></pre>
<p>That is it. The widget loads automatically, fetches your approved testimonials, and displays them with the template you chose.</p>

<h2 id="smart-tags">Smart Tags (data attributes)</h2>
<p>You can customize the widget behavior using HTML attributes:</p>
<ul>
<li><code>data-opinafy="slug"</code> - Your project slug (required).</li>
<li><code>data-template="name"</code> - The template to use.</li>
<li><code>data-layout="carousel|grid|wall|single|badge|popup|marquee"</code> - The layout.</li>
<li><code>data-limit="10"</code> - Maximum number of testimonials to show.</li>
<li><code>data-min-rating="4"</code> - Only testimonials with minimum rating.</li>
<li><code>data-tags="vip,premium"</code> - Filter by tags.</li>
<li><code>data-autoplay="true"</code> - Autoplay for carousel/single.</li>
<li><code>data-speed="5000"</code> - Autoplay speed in milliseconds.</li>
</ul>

<h2 id="video-display">Video display modes</h2>
<p>If your testimonials include video, you can choose how they are displayed:</p>
<ul>
<li><strong>Inline:</strong> The video plays within the testimonial card.</li>
<li><strong>Modal:</strong> Clicking opens the video in a full-screen modal.</li>
<li><strong>Thumbnail:</strong> A thumbnail is shown and clicking plays the video.</li>
</ul>

<h2 id="preview">Live preview</h2>
<p>From the dashboard, you can preview the widget before installing it on your website.</p>
<ol>
<li>Go to <strong>Projects &gt; Your project &gt; Widget</strong>.</li>
<li>Select template, layout, and customize colors.</li>
<li>The preview updates in real time as you make changes.</li>
<li>When satisfied, copy the embed code.</li>
</ol>
<p>The preview shows exactly how the widget will look on your website, including real testimonials from your project.</p>
`,
  },
  {
    slug: 'ab-testing',
    slugEs: 'ab-testing',
    title: 'A/B Testing for testimonials',
    category: 'analytics',
    description: 'Discover how testimonial A/B testing helps you find the ones that convert the most.',
    content: `
<h2 id="what-is">What is testimonial A/B Testing</h2>
<p>Testimonial A/B testing allows you to compare the performance of different testimonials to identify which ones generate the most trust and conversions on your website.</p>
<p>Unlike traditional A/B testing (which compares entire pages), in Opinafy you compare <strong>individual testimonials</strong> to discover which ones are most effective.</p>
<h3>Why it matters</h3>
<ul>
<li>Not all testimonials generate the same impact.</li>
<li>A specific testimonial about results converts more than a generic one.</li>
<li>Testimonials with photos tend to have higher engagement.</li>
<li>Identifying the best testimonials allows you to optimize your conversion.</li>
</ul>

<h2 id="how-it-works">How it works</h2>
<p>Opinafy's A/B testing system automatically tracks two key metrics for each testimonial:</p>
<h3>Tracked metrics</h3>
<ul>
<li><strong>Impressions:</strong> How many times a testimonial has been shown on your widget.</li>
<li><strong>Clicks:</strong> How many times a visitor has interacted with the testimonial (click to expand, view video, etc.).</li>
</ul>
<h3>Automatic process</h3>
<ol>
<li>Each time your widget loads on a visitor's page, an <strong>impression</strong> is recorded for each visible testimonial.</li>
<li>When a visitor interacts with a testimonial (click to read more, play video, etc.), a <strong>click</strong> is recorded.</li>
<li>The system automatically calculates the <strong>CTR (Click-Through Rate)</strong> of each testimonial.</li>
<li>Over time, you can see which testimonials generate the most engagement.</li>
</ol>

<h2 id="view-analytics">Viewing testimonial analytics</h2>
<p>Access A/B testing analytics from your dashboard:</p>
<ol>
<li>Go to <strong>Projects &gt; Your project &gt; Analytics</strong>.</li>
<li>The direct URL is: <code>/proyectos/your-slug/analytics</code>.</li>
<li>You will see a table with all your testimonials and their metrics:</li>
</ol>
<ul>
<li><strong>Total impressions:</strong> Total number of times it has been shown.</li>
<li><strong>Total clicks:</strong> Total number of interactions.</li>
<li><strong>CTR:</strong> Percentage of clicks over impressions.</li>
<li><strong>Trend:</strong> Whether performance is going up or down over time.</li>
</ul>

<h2 id="ctr">CTR per testimonial</h2>
<p>CTR (Click-Through Rate) is the main A/B testing metric. It is calculated as:</p>
<p><code>CTR = (Clicks / Impressions) x 100</code></p>
<h3>Interpreting CTR</h3>
<ul>
<li><strong>High CTR (&gt; 5%):</strong> The testimonial generates a lot of interest. Consider it as a pinned testimonial.</li>
<li><strong>Medium CTR (2-5%):</strong> Normal performance. Good supporting testimonial.</li>
<li><strong>Low CTR (&lt; 2%):</strong> The testimonial does not generate interest. Consider replacing it or moving it to a less visible position.</li>
</ul>
<p>Keep in mind that CTRs vary by industry, widget type, and testimonial position on the page.</p>

<h2 id="best-practices">Best practices</h2>
<h3>1. Wait for sufficient data</h3>
<p>Do not make decisions with few impressions. Wait for at least <strong>100 impressions per testimonial</strong> before comparing CTRs.</p>
<h3>2. Pin the winners</h3>
<p>Mark testimonials with the highest CTR as pinned so they appear first on your widget.</p>
<h3>3. Rotate testimonials</h3>
<p>Add new testimonials periodically and compare their performance with existing ones. Recent testimonials tend to have better engagement.</p>
<h3>4. Test different formats</h3>
<p>Compare the performance of text vs. video testimonials, short vs. long, with photo vs. without photo.</p>
<h3>5. Consider context</h3>
<p>A testimonial may perform better on a landing page than on the home page. If you use multiple widgets, analyze performance by location.</p>
<h3>6. Act on the data</h3>
<ul>
<li>Replace testimonials with the worst CTR.</li>
<li>Ask for more testimonials similar to the best-performing ones.</li>
<li>Adjust your form's guiding questions based on patterns from the most effective testimonials.</li>
</ul>
`,
  },
  {
    slug: 'mini-site',
    slugEs: 'mini-sitio',
    title: 'Testimonial Mini Site',
    category: 'mini-site',
    description: 'Create your own testimonial mini site with custom URL, bio, templates, and more.',
    content: `
<h2 id="what-is">What is the Mini Site</h2>
<p>The Mini Site is a public web page hosted on Opinafy where you can display all your testimonials, your professional profile, and links to your projects. It is like your own social proof page.</p>
<h3>Mini Site URL</h3>
<p>Your mini site is accessible at:</p>
<p><code>https://opinafy.com/s/your-username</code></p>
<p>You can share this URL in your email signature, social media, business cards, or anywhere you want to showcase your reputation.</p>

<h3>Who it is for</h3>
<ul>
<li><strong>Freelancers:</strong> Show client testimonials on a professional page.</li>
<li><strong>Small businesses:</strong> Complement your website with a dedicated reputation page.</li>
<li><strong>Consultants:</strong> Share your satisfaction track record with potential clients.</li>
<li><strong>Agencies:</strong> Display feedback from all your projects in one place.</li>
<li><strong>Healthcare professionals:</strong> Dentists, doctors, therapists... with specific templates.</li>
</ul>

<h2 id="configure-bio">Configuring your bio and website</h2>
<p>The mini site displays your professional information in the header:</p>
<h3>Available fields</h3>
<ul>
<li><strong>Name or company:</strong> Your professional name or company name.</li>
<li><strong>Bio:</strong> A short description (up to 300 characters) of what you do.</li>
<li><strong>Website:</strong> Link to your main website.</li>
<li><strong>Logo/Avatar:</strong> Your professional photo or company logo.</li>
<li><strong>Location:</strong> City or country (optional).</li>
</ul>
<p>Configure these from <strong>Dashboard &gt; Settings &gt; Profile</strong>.</p>

<h2 id="choose-template">Choosing a Mini Site template</h2>
<p>Opinafy offers <strong>30 Mini Site templates</strong> organized by profession and style.</p>
<h3>Template categories</h3>
<ul>
<li><strong>General:</strong> Universal designs that work for any industry.</li>
<li><strong>Freelancer:</strong> Focused on professional services.</li>
<li><strong>Ecommerce:</strong> Ideal for online stores.</li>
<li><strong>Food &amp; Beverage:</strong> For restaurants, cafes, bars.</li>
<li><strong>Healthcare:</strong> For medical, dental, therapeutic practices.</li>
<li><strong>Education:</strong> For academies, teachers, tutors.</li>
<li><strong>Real Estate:</strong> For agents and agencies.</li>
<li><strong>Legal:</strong> For lawyers and law firms.</li>
</ul>
<p>You can preview all templates at <a href="https://opinafy.com/en/minisite-templates">opinafy.com/en/minisite-templates</a>.</p>

<h2 id="choose-projects">Choosing which projects to show</h2>
<p>Your mini site can display testimonials from one, several, or all of your projects.</p>
<h3>Configuration options</h3>
<ul>
<li><strong>All projects:</strong> Shows all approved testimonials from all projects.</li>
<li><strong>Selected projects:</strong> Manually choose which projects to include.</li>
<li><strong>Hide projects:</strong> Exclude projects you do not want to show publicly.</li>
</ul>

<h2 id="testimonials-per-page">Configuring testimonials per page</h2>
<p>Control how many testimonials are shown initially and how more are loaded:</p>
<ul>
<li><strong>Testimonials per page:</strong> Choose how many to show on load (6, 12, 24, or all).</li>
<li><strong>Order:</strong> Pinned testimonials always appear first, followed by most recent.</li>
<li><strong>Load more:</strong> A "See more testimonials" button loads the next batch without page reload.</li>
</ul>

<h2 id="share">Sharing your Mini Site</h2>
<p>Once configured, you can share your mini site in several ways:</p>
<ul>
<li><strong>Direct URL:</strong> <code>opinafy.com/s/your-username</code> - Share it in emails, chats, etc.</li>
<li><strong>QR code:</strong> Generate a QR of your mini site and download it. Ideal for printed materials.</li>
<li><strong>Social media:</strong> Share directly on LinkedIn, Twitter, Instagram bio, etc.</li>
<li><strong>Email signature:</strong> Add the link to your professional signature.</li>
<li><strong>Business cards:</strong> Print the QR or URL on your cards.</li>
</ul>

<h3>Mini Site SEO</h3>
<p>Your mini site is optimized for search engines:</p>
<ul>
<li>Includes structured data (Schema.org) so Google understands the content.</li>
<li>Optimized meta tags with your name, bio, and number of testimonials.</li>
<li>Open Graph for social media previews.</li>
<li>Clean, memorable URL.</li>
</ul>
`,
  },
  {
    slug: 'video-audio-photo',
    slugEs: 'video-audio-foto',
    title: 'Video, audio, and photo testimonials',
    category: 'testimonials',
    description: 'How to record and manage video, audio, and photo testimonials.',
    content: `
<h2 id="video">Video testimonials</h2>
<p>Video testimonials are the most powerful: they generate up to <strong>3 times more trust</strong> than text testimonials. Opinafy allows your customers to record video directly from the form.</p>
<h3>Availability</h3>
<ul>
<li><strong>Business plan:</strong> Video recording enabled.</li>
<li><strong>Other plans:</strong> Text, audio, and photo only.</li>
</ul>
<h3>How video recording works</h3>
<ol>
<li>The customer accesses your collection form.</li>
<li>Clicks the <strong>"Record video"</strong> button.</li>
<li>The browser requests permission to access the camera and microphone.</li>
<li>The customer records their testimonial (maximum duration: 2 minutes).</li>
<li>They can preview and re-record if not satisfied.</li>
<li>On submission, the video is uploaded automatically.</li>
</ol>
<h3>Technical specifications</h3>
<ul>
<li><strong>Format:</strong> WebM (recording) / MP4 (automatic conversion).</li>
<li><strong>Resolution:</strong> Up to 720p.</li>
<li><strong>Maximum duration:</strong> 2 minutes.</li>
<li><strong>Maximum size:</strong> 50 MB.</li>
<li><strong>Compression:</strong> Automatic server-side to optimize storage and loading.</li>
</ul>

<h2 id="audio">Audio testimonials</h2>
<p>Audio testimonials are a perfect alternative to video: more personal than text, but without the barrier of getting in front of a camera.</p>
<h3>Availability</h3>
<ul>
<li><strong>All paid plans:</strong> Audio recording enabled (Mini Site, Pro, and Business).</li>
<li><strong>Free plan:</strong> Text and photo only.</li>
</ul>
<h3>How audio recording works</h3>
<ol>
<li>The customer accesses your collection form.</li>
<li>Clicks the <strong>"Record audio"</strong> button.</li>
<li>The browser requests permission to access the microphone.</li>
<li>The customer records their testimonial (maximum duration: 3 minutes).</li>
<li>They can preview and re-record.</li>
<li>On submission, the audio is uploaded automatically.</li>
</ol>
<h3>Technical specifications</h3>
<ul>
<li><strong>Format:</strong> WebM audio / MP3 (automatic conversion).</li>
<li><strong>Maximum duration:</strong> 3 minutes.</li>
<li><strong>Maximum size:</strong> 10 MB.</li>
<li><strong>Quality:</strong> 128 kbps.</li>
</ul>

<h2 id="photo">Photos in testimonials</h2>
<p>Your customers can upload a photo with their testimonial. Photos add credibility and make testimonials more visual.</p>
<h3>Availability</h3>
<ul>
<li><strong>All plans:</strong> Photo upload enabled.</li>
</ul>
<h3>Types of photos</h3>
<ul>
<li><strong>Profile photo:</strong> A photo of the customer that appears as an avatar next to their name.</li>
<li><strong>Attached photo:</strong> A photo related to the testimonial (e.g., the product, the result, before/after).</li>
</ul>
<h3>Technical specifications</h3>
<ul>
<li><strong>Supported formats:</strong> JPG, PNG, WebP, GIF.</li>
<li><strong>Maximum size:</strong> 5 MB per image.</li>
<li><strong>Resolution:</strong> Automatically resized to a maximum of 1200px width.</li>
<li><strong>Compression:</strong> Automatic to optimize loading.</li>
</ul>

<h2 id="compression">Automatic compression</h2>
<p>All multimedia files uploaded to Opinafy are automatically compressed to ensure fast loading times without sacrificing perceptible quality.</p>
<h3>How it works</h3>
<ul>
<li><strong>Images:</strong> Resized and compressed while maintaining excellent visual quality.</li>
<li><strong>Audio:</strong> Converted to MP3 at 128 kbps, an optimal balance between quality and size.</li>
<li><strong>Video:</strong> Converted to MP4 with H.264 compression. Resolution is adjusted to 720p if the original is larger.</li>
</ul>
<p>Compression is transparent to the user: the original file is processed in the background and the optimized result is served via CDN for maximum speed.</p>

<h3>Multimedia tips</h3>
<ul>
<li>Encourage your customers to record video testimonials: they are much more impactful.</li>
<li>If your plan does not include video, audio is an excellent alternative.</li>
<li>Profile photos help humanize text testimonials.</li>
<li>Make sure your customers have good lighting and a quiet environment for recording.</li>
</ul>
`,
  },
  {
    slug: 'integrations',
    slugEs: 'integraciones',
    title: 'Integrations',
    category: 'integrations',
    description: 'How to integrate Opinafy with WordPress, Shopify, WooCommerce, Webflow, Wix, and more.',
    content: `
<h2 id="wordpress">WordPress</h2>
<p>Installing Opinafy on WordPress is quick and easy. You have several options:</p>
<h3>Option 1: Custom HTML block</h3>
<ol>
<li>Edit the page where you want to show testimonials.</li>
<li>Add a <strong>"Custom HTML"</strong> block.</li>
<li>Paste the Opinafy embed code.</li>
<li>Save and publish.</li>
</ol>
<h3>Option 2: Header/Footer plugin</h3>
<ol>
<li>Install a plugin like <strong>"WPCode"</strong> or <strong>"Insert Headers and Footers"</strong>.</li>
<li>Go to the plugin settings.</li>
<li>Paste the Opinafy script (<code>&lt;script src="https://opinafy.com/widget.js" async&gt;&lt;/script&gt;</code>) in the Footer section.</li>
<li>On the desired page, add an HTML block with <code>&lt;div data-opinafy="your-slug"&gt;&lt;/div&gt;</code>.</li>
</ol>
<h3>Option 3: Shortcode (with plugin)</h3>
<p>If you use a shortcode plugin, you can create one that inserts the Opinafy div. See the <a href="https://opinafy.com/en/guides/wordpress">complete WordPress guide</a>.</p>

<h2 id="shopify">Shopify</h2>
<p>Integrate testimonials into your Shopify store to boost buyer confidence.</p>
<h3>Installation</h3>
<ol>
<li>Go to <strong>Online Store &gt; Themes &gt; Customize</strong>.</li>
<li>Add a <strong>"Custom HTML"</strong> or <strong>"Custom Liquid"</strong> section.</li>
<li>Paste the Opinafy embed code.</li>
<li>Save changes.</li>
</ol>
<h3>Where to place testimonials in Shopify</h3>
<ul>
<li><strong>Home page:</strong> Below the hero or featured products.</li>
<li><strong>Product pages:</strong> Just before the buy button or in a dedicated tab.</li>
<li><strong>Checkout page:</strong> To reduce cart abandonment.</li>
</ul>

<h2 id="woocommerce">WooCommerce</h2>
<p>WooCommerce runs on WordPress, so you can use the same WordPress installation options.</p>
<p>Additionally, you can place testimonials on:</p>
<ul>
<li><strong>Product pages:</strong> Using WooCommerce hooks.</li>
<li><strong>Thank you page:</strong> After a completed purchase.</li>
<li><strong>Sidebar:</strong> As a WordPress widget in the sidebar.</li>
</ul>

<h2 id="prestashop">PrestaShop</h2>
<ol>
<li>Go to <strong>Design &gt; Positions</strong>.</li>
<li>Click <strong>"Transplant a module"</strong>.</li>
<li>Use the <strong>"Custom HTML"</strong> module or similar.</li>
<li>Paste the Opinafy embed code in the desired hook (displayHome, displayFooterBefore, etc.).</li>
<li>Save changes.</li>
</ol>

<h2 id="webflow">Webflow</h2>
<h3>Option 1: Project custom code</h3>
<ol>
<li>Go to <strong>Project Settings &gt; Custom Code</strong>.</li>
<li>Paste the Opinafy script in the <strong>"Footer Code"</strong> section.</li>
<li>On your page, add an <strong>Embed</strong> element with the Opinafy div.</li>
</ol>
<h3>Option 2: Per page</h3>
<ol>
<li>On the desired page, go to <strong>Page Settings &gt; Custom Code</strong>.</li>
<li>Paste the complete embed code (div + script) in the "Before &lt;/body&gt; tag" section.</li>
</ol>
<p>See the <a href="https://opinafy.com/en/guides/webflow">complete Webflow guide</a>.</p>

<h2 id="wix">Wix and Squarespace</h2>
<h3>Wix</h3>
<ol>
<li>Add an <strong>"HTML embed"</strong> element (iframe or embed) to your page.</li>
<li>Paste the Opinafy embed code.</li>
<li>Adjust the element size.</li>
</ol>
<h3>Squarespace</h3>
<ol>
<li>Add a <strong>"Code"</strong> block to your page.</li>
<li>Paste the Opinafy embed code.</li>
<li>Save and publish.</li>
</ol>
<p>See the complete guides: <a href="https://opinafy.com/en/guides/wix">Wix</a> | <a href="https://opinafy.com/en/guides/squarespace">Squarespace</a>.</p>

<h2 id="gtm">Google Tag Manager</h2>
<p>If you already use GTM to manage your site scripts, you can install Opinafy through it.</p>
<ol>
<li>In GTM, create a new <strong>"Custom HTML"</strong> tag.</li>
<li>Paste the Opinafy script.</li>
<li>Configure the trigger to fire on the pages where you want to show testimonials.</li>
<li>Publish the changes.</li>
</ol>
<p>See the <a href="https://opinafy.com/en/guides/google-tag-manager">complete GTM guide</a>.</p>

<h2 id="webhooks">Webhooks (Zapier, Make, n8n)</h2>
<p>Webhooks allow you to connect Opinafy with thousands of external tools.</p>
<h3>Available events</h3>
<ul>
<li><strong>New testimonial:</strong> Fires when a customer leaves a new testimonial.</li>
<li><strong>Testimonial approved:</strong> Fires when you approve a testimonial.</li>
<li><strong>Testimonial rejected:</strong> Fires when you reject a testimonial.</li>
</ul>
<h3>Automation examples</h3>
<ul>
<li>Send a thank-you email when a testimonial is approved.</li>
<li>Automatically post on social media when a 5-star testimonial arrives.</li>
<li>Notify on Slack when a negative testimonial arrives.</li>
<li>Automatically request a testimonial 7 days after a purchase on Shopify.</li>
</ul>
`,
  },
  {
    slug: 'billing-plans',
    slugEs: 'facturación-planes',
    title: 'Billing and plans',
    category: 'billing',
    description: 'Information about the 4 Opinafy plans, how to upgrade, cancel, and the 14-day guarantee.',
    content: `
<h2 id="plans">The 4 Opinafy plans</h2>
<p>Opinafy offers 4 plans adapted to each growth stage of your business:</p>

<h3>Free Plan (0 EUR/month)</h3>
<ul>
<li>1 project</li>
<li>10 testimonials</li>
<li>2 widget layouts (Grid and Carousel)</li>
<li>Basic collection form</li>
<li>Photo in testimonials</li>
<li>Basic Mini Site</li>
<li>No Opinafy watermark: NO ("Powered by Opinafy" shown)</li>
</ul>

<h3>Mini Site Plan (5 EUR/month)</h3>
<ul>
<li>3 projects</li>
<li>50 testimonials per project</li>
<li>All widget layouts</li>
<li>Audio in testimonials</li>
<li>Basic widget templates</li>
<li>No Opinafy watermark</li>
<li>QR codes</li>
<li>Email templates</li>
<li>Sentiment analysis</li>
</ul>

<h3>Pro Plan (9 EUR/month)</h3>
<ul>
<li>10 projects</li>
<li>Unlimited testimonials</li>
<li>All widget templates (100+)</li>
<li>A/B testimonial testing</li>
<li>Advanced analytics</li>
<li>Public response to testimonials</li>
<li>Testimonial import</li>
<li>Smart tags</li>
<li>Mini Site with all templates</li>
<li>Webhooks</li>
<li>Priority support</li>
</ul>

<h3>Business Plan (19 EUR/month)</h3>
<ul>
<li>Unlimited projects</li>
<li>Unlimited testimonials</li>
<li>Everything in the Pro plan</li>
<li>Video in testimonials</li>
<li>3 team seats</li>
<li>Full API</li>
<li>Custom CSS for widgets</li>
<li>Verified certification</li>
<li>Social Post Generator</li>
<li>PDF Export</li>
<li>Premium support</li>
</ul>

<h2 id="upgrade">How to upgrade your plan</h2>
<ol>
<li>Go to <strong>Dashboard &gt; Settings &gt; Billing</strong>.</li>
<li>Click <strong>"Change plan"</strong>.</li>
<li>Select the plan you want to upgrade to.</li>
<li>Enter your payment details (credit or debit card).</li>
<li>Confirm the change. The new plan activates immediately.</li>
</ol>
<p>Opinafy uses <strong>Stripe</strong> to process payments securely. We do not store card data on our servers.</p>
<h3>Prorated billing</h3>
<p>If you upgrade mid-cycle, you only pay the prorated difference. You do not lose money from the previous plan.</p>

<h2 id="cancel">How to cancel your subscription</h2>
<ol>
<li>Go to <strong>Dashboard &gt; Settings &gt; Billing</strong>.</li>
<li>Click <strong>"Cancel subscription"</strong>.</li>
<li>Confirm the cancellation.</li>
<li>Your paid plan will remain active until the end of the current billing period.</li>
<li>After that, your account will automatically downgrade to the Free plan.</li>
</ol>
<p>There are no penalties for canceling. You can resubscribe at any time.</p>

<h2 id="guarantee">14-day guarantee</h2>
<p>All paid plans include a <strong>14-day money-back guarantee</strong>.</p>
<ul>
<li>If you are not satisfied with Opinafy, contact us within the first 14 days.</li>
<li>We will refund 100% of the amount, no questions asked.</li>
<li>The guarantee applies to the first payment of each subscription.</li>
</ul>
<p>To request a refund, send an email to <a href="mailto:hola@opinafy.com">hola@opinafy.com</a> with your registration email.</p>

<h2 id="downgrade">What happens when you downgrade</h2>
<p>If you cancel your paid plan or downgrade to a lower plan, here is what happens:</p>
<h3>Projects</h3>
<ul>
<li>If you have more projects than allowed on the new plan, projects are <strong>not deleted</strong>.</li>
<li>You can still view all your projects, but you cannot create new ones until you are within the limit.</li>
<li>Widgets for all your projects continue to work.</li>
</ul>
<h3>Testimonials</h3>
<ul>
<li>Existing testimonials are <strong>not deleted</strong>.</li>
<li>If you exceed the new plan's testimonial limit, you cannot receive new ones until you are within the limit.</li>
<li>Approved testimonials continue to show on your widget.</li>
</ul>
<h3>Features</h3>
<ul>
<li>Exclusive features from the previous plan become unavailable.</li>
<li>Widgets using templates or layouts not available on your new plan will continue showing testimonials, but with the default configuration.</li>
<li>Video testimonials stop being displayed if you downgrade from the Business plan (but are not deleted).</li>
</ul>
<h3>Mini Site</h3>
<ul>
<li>Your mini site remains active, but uses the default Free plan template.</li>
</ul>
<p>In summary: <strong>you never lose data</strong>. Only the available features are limited according to your current plan.</p>
`,
  },
  {
    slug: 'advanced-tools',
    slugEs: 'herramientas-avanzadas',
    title: 'Advanced tools',
    category: 'automation',
    description: 'Health Score, Certification, Social Post Generator, PDF Export, Ranking, and more.',
    content: `
<h2 id="health-score">Health Score</h2>
<p>The Health Score is a free tool that analyzes any website and evaluates its social proof strategy.</p>
<h3>What it analyzes</h3>
<ul>
<li><strong>Visible testimonials:</strong> Does the website have customer testimonials?</li>
<li><strong>Client logos:</strong> Does it show logos of companies that trust it?</li>
<li><strong>Case studies:</strong> Does it have case study or success story pages?</li>
<li><strong>Ratings:</strong> Does it show stars or scores?</li>
<li><strong>Trust badges:</strong> Does it have security seals, certifications, etc.?</li>
<li><strong>Social media:</strong> Does it have presence and social proof on networks?</li>
</ul>
<h3>How to use it</h3>
<ol>
<li>Go to <a href="https://opinafy.com/en/health-score">opinafy.com/en/health-score</a>.</li>
<li>Enter the URL of the website you want to analyze.</li>
<li>You will receive a score from 0 to 100 with specific recommendations.</li>
</ol>
<p>It is a free tool that does not require registration. Ideal for analyzing your own website or your competition.</p>

<h2 id="certification">Social Proof Certification</h2>
<p>Opinafy certification recognizes businesses that actively use social proof to build trust.</p>
<h3>Certification levels</h3>
<ul>
<li><strong>Bronze:</strong> At least 5 approved testimonials with an average of 4+ stars.</li>
<li><strong>Silver:</strong> At least 15 approved testimonials with an average of 4.2+ stars.</li>
<li><strong>Gold:</strong> At least 30 approved testimonials with an average of 4.5+ stars and email verification enabled.</li>
<li><strong>Platinum:</strong> At least 50 approved testimonials with an average of 4.7+ stars, email verification enabled, and video testimonials.</li>
</ul>
<h3>Benefits</h3>
<ul>
<li><strong>Embeddable badge:</strong> You can embed your certification badge on your website with a simple code.</li>
<li><strong>Ranking visibility:</strong> You appear in Opinafy's public ranking.</li>
<li><strong>Credibility:</strong> Customers see that your reputation is verified by a third party.</li>
</ul>
<p>Check your certification at <a href="https://opinafy.com/en/certification">opinafy.com/en/certification</a>.</p>

<h2 id="social-post">Social Post Generator</h2>
<p>Turn your best testimonials into professional images for social media.</p>
<h3>How it works</h3>
<ol>
<li>Go to an approved testimonial in your dashboard.</li>
<li>Click <strong>"Create social post"</strong>.</li>
<li>Choose a social media design template.</li>
<li>Customize colors and format.</li>
<li>Download the image optimized for Instagram, LinkedIn, Twitter, or Facebook.</li>
</ol>
<p>Available on <strong>Business</strong> plans.</p>

<h2 id="pdf-export">PDF Export</h2>
<p>Export your testimonials in professional PDF format for use in proposals, presentations, or printed materials.</p>
<h3>Export options</h3>
<ul>
<li><strong>All testimonials:</strong> Export a PDF with all approved testimonials from a project.</li>
<li><strong>Selected:</strong> Choose the specific testimonials you want to include.</li>
<li><strong>Formatted:</strong> The PDF includes your logo, stars, names, and dates.</li>
</ul>
<p>Available on <strong>Business</strong> plans.</p>

<h2 id="ranking">Public ranking</h2>
<p>The Opinafy ranking is a public leaderboard of businesses with the best verified reputation.</p>
<h3>How it works</h3>
<ul>
<li>Automatically calculated based on: number of testimonials, star average, verifications, and recent activity.</li>
<li>Only includes businesses with at least 5 approved testimonials.</li>
<li>Updated daily.</li>
</ul>
<p>Check the ranking at <a href="https://opinafy.com/en/ranking">opinafy.com/en/ranking</a>.</p>

<h2 id="notifications">Notifications</h2>
<p>Opinafy keeps you informed with email notifications:</p>
<ul>
<li><strong>New testimonial:</strong> You receive an email every time a customer leaves a testimonial.</li>
<li><strong>Verified testimonial:</strong> When a testimonial completes email verification.</li>
<li><strong>Weekly summary:</strong> A summary of the week's activity (testimonials received, approved, etc.).</li>
</ul>
<p>You can configure which notifications to receive from <strong>Dashboard &gt; Settings &gt; Notifications</strong>.</p>

<h2 id="verification-badge">Embeddable verification badge</h2>
<p>Display your Opinafy certification directly on your website with an embeddable badge.</p>
<h3>How to install it</h3>
<ol>
<li>Go to <a href="https://opinafy.com/en/verified">opinafy.com/en/verified</a>.</li>
<li>Select the badge style (light, dark, compact).</li>
<li>Copy the embed code.</li>
<li>Paste it on your website where you want to show the badge.</li>
</ol>
<p>The badge displays:</p>
<ul>
<li>Your certification level (Bronze/Silver/Gold/Platinum).</li>
<li>Your star average.</li>
<li>The number of verified testimonials.</li>
<li>A link to your mini site so visitors can see the full testimonials.</li>
</ul>
<p>The badge updates automatically when your metrics change.</p>
`,
  },
]
