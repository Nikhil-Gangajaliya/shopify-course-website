// Get DOM elements
const dayTitle = document.getElementById('day-title');
const dayText = document.getElementById('day-text');

// ======================
// COURSE DATA PLACEHOLDER
// ======================
// You can add each day's content here
// Format:
// courseData[dayNumber] = `HTML content for that day`;
const courseData = {
    // Demo for Day 1
    1: `
        <h3>Day 1 – Introduction to Shopify</h3>

<p><strong>Goal:</strong> Understand Shopify basics and explore the dashboard.</p>

<h4>1️⃣ Theory: What is Shopify?</h4>
<p>Shopify is a cloud-based e-commerce platform to create online stores. You don’t need to worry about hosting, servers, or coding initially.</p>

<p><strong>Main features:</strong></p>
<ul>
    <li><strong>Products:</strong> Add and manage what you sell.</li>
    <li><strong>Orders:</strong> View and fulfill customer purchases.</li>
    <li><strong>Customers:</strong> Track buyers and segment them.</li>
    <li><strong>Analytics:</strong> Check sales, traffic, and store performance.</li>
    <li><strong>Apps:</strong> Add extra features like reviews, chats, email marketing.</li>
</ul>

<p><strong>Why Shopify?</strong></p>
<ul>
    <li>Easy setup</li>
    <li>Scalable for small to large businesses</li>
    <li>Built-in payment options</li>
    <li>Huge app marketplace for advanced features</li>
</ul>

<h4>2️⃣ Practical Task: Explore Shopify Dashboard</h4>
<p><strong>Create Shopify account:</strong></p>
<ol>
    <li>Go to <a href="https://www.shopify.com" target="_blank">shopify.com</a></li>
    <li>Click <em>Start Free Trial</em> → Fill details.</li>
    <li>(If you already have an account, log in.)</li>
</ol>

<p><strong>Dashboard Overview:</strong></p>
<ul>
    <li><strong>Home:</strong> Quick overview of sales, orders, visitors.</li>
    <li><strong>Orders:</strong> All customer orders, test orders.</li>
    <li><strong>Products:</strong> Add, edit, manage inventory.</li>
    <li><strong>Customers:</strong> All buyers, segmentation.</li>
    <li><strong>Analytics:</strong> Sales, traffic, reports.</li>
    <li><strong>Marketing:</strong> Campaigns, discounts, SEO.</li>
    <li><strong>Apps:</strong> Add extra functionalities.</li>
    <li><strong>Settings:</strong> Payments, shipping, taxes, policies, staff accounts.</li>
</ul>

<p><strong>Navigation Practice:</strong></p>
<ul>
    <li>Click through <em>Products → Add Product</em> (don’t add real products yet, just explore fields).</li>
    <li>Go to <em>Orders → Draft Orders</em>.</li>
    <li>Open <em>Customers → All Customers</em>.</li>
    <li>Explore <em>Settings → Payments</em> and see payment method options.</li>
</ul>

<h4>3️⃣ Tips for Day 1</h4>
<ul>
    <li>Don’t worry about memorizing everything today. Just get familiar with the dashboard layout.</li>
    <li>Note any features that look interesting. We will explore them later in depth.</li>
    <li>Bookmark <a href="https://help.shopify.com" target="_blank">Shopify Help Center</a>.</li>
</ul>

<p><strong>✅ Day 1 Practical Goal:</strong></p>
<ul>
    <li>You can log in, navigate, and identify all main sections of Shopify dashboard.</li>
    <li>Understand what Shopify can do for an e-commerce store.</li>
</ul>
    <p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=nJMqRgKkkBg" target="_blank">Shopify Tutorial for Beginners 2025 - Step by Step</a></p>
    <p><strong>Description:</strong> A comprehensive guide to setting up your first Shopify store, covering store design, layout, and essential settings.</p>
   `,

    // Demo for Day 2
    2: `
        <h3>Day 2 – Products & Collections</h3>

<p><strong>Goal:</strong> Learn how to add products and organize them into collections.</p>

<h4>1️⃣ Theory: Products & Collections</h4>

<p><strong>Products:</strong></p>
<p>Each item you sell on your store is a product.</p>

<p><strong>Key fields for a product:</strong></p>
<ul>
  <li><strong>Title:</strong> Name of the product</li>
  <li><strong>Description:</strong> Explain features, benefits, usage</li>
  <li><strong>Images:</strong> High-quality photos</li>
  <li><strong>Price:</strong> Selling price & compare at price (if on sale)</li>
  <li><strong>SKU:</strong> Stock Keeping Unit, unique for each variant</li>
  <li><strong>Variants:</strong> Different sizes, colors, materials</li>
  <li><strong>Inventory:</strong> Track stock availability</li>
</ul>

<p><strong>Collections:</strong></p>
<p>Collections group products together. Examples include:</p>
<ul>
  <li>Men’s Clothing</li>
  <li>Women’s Shoes</li>
  <li>Sale Items</li>
</ul>
<p>This makes it easier for customers to browse similar products.</p>
<p>Collections can be:</p>
<ul>
  <li><strong>Manual:</strong> You add products one by one</li>
  <li><strong>Automatic:</strong> Based on rules like price, tags, or product type</li>
</ul>

<h4>2️⃣ Practical Task: Add Products</h4>

<ol>
  <li>Go to <strong>Dashboard → Products → Add Product</strong></li>
  <li>Fill Product Details:
    <ul>
      <li><strong>Title:</strong> Red Cotton T-Shirt</li>
      <li><strong>Description:</strong> 100% cotton, soft and breathable, available in S, M, L</li>
      <li><strong>Images:</strong> Upload 2–3 sample images</li>
      <li><strong>Price:</strong> ₹499</li>
      <li><strong>SKU:</strong> RED-TS-001</li>
      <li><strong>Inventory:</strong> Track quantity (e.g., 50 units)</li>
      <li><strong>Variants:</strong> Add size options S, M, L</li>
    </ul>
  </li>
  <li>Click <strong>Save Product</strong></li>
</ol>

<p><em>Tip:</em> Try adding 3–5 sample products with different categories, like T-shirts, Caps, Shoes.</p>

<h4>3️⃣ Practical Task: Create Collections</h4>

<ol>
  <li>Go to <strong>Dashboard → Products → Collections → Create Collection</strong></li>
  <li><strong>Example Manual Collection:</strong>
    <ul>
      <li><strong>Name:</strong> Men’s T-Shirts</li>
      <li>Add the Red Cotton T-Shirt product manually</li>
    </ul>
  </li>
  <li><strong>Example Automatic Collection:</strong>
    <ul>
      <li><strong>Name:</strong> Under ₹500</li>
      <li>Set condition: Price &lt; ₹500 → all products meeting condition added automatically</li>
    </ul>
  </li>
  <li>Click <strong>Save Collection</strong></li>
</ol>

<p><em>Repeat to create 2–3 collections for practice</em></p>

<h4>4️⃣ Tips for Day 2</h4>
<ul>
  <li>Use clear, descriptive product titles.</li>
  <li>Always upload high-quality images (at least 1024x1024 px).</li>
  <li>Use tags to make filtering easier for customers.</li>
  <li>Organize products into collections so your store looks professional.</li>
</ul>

<p><strong>✅ Day 2 Practical Goal:</strong></p>
<ul>
  <li>You can add products with all details.</li>
  <li>You can create manual and automatic collections.</li>
  <li>Your dashboard now has a mini sample store ready to showcase.</li>
</ul>
<p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=u1p2UxE96ck" target="_blank">Shopify Product Management Detailed</a></p>
    <p><strong>Description:</strong> Learn how to manage products, including adding new items, editing details, and organizing them into collections.</p>
  `,
    3: `<h3>Day 3 – Inventory Management</h3>

<p><strong>Goal:</strong> Efficiently manage stock, SKUs, and variants for your products.</p>

<h4>1️⃣ Theory: Inventory Basics</h4>

<p><strong>Inventory Management:</strong></p>
<p>Ensures your store never oversells or runs out of stock.</p>

<p><strong>Shopify allows you to:</strong></p>
<ul>
  <li>Track quantities</li>
  <li>Set SKUs for each product/variant</li>
  <li>Manage multiple variants (size, color, material)</li>
</ul>

<p><strong>Variants:</strong></p>
<p>Variants allow multiple options for one product.</p>
<p><em>Example:</em> T-Shirt → Sizes S, M, L → Colors Red, Blue, Black</p>
<p>Each variant can have its own price, SKU, and stock quantity.</p>

<p><strong>Bulk Upload via CSV:</strong></p>
<p>For large stores, adding products manually is slow.</p>
<p>Shopify allows CSV import with all product details.</p>
<p><strong>CSV columns include:</strong></p>
<ul>
  <li>Title</li>
  <li>Description</li>
  <li>SKU</li>
  <li>Price</li>
  <li>Inventory</li>
  <li>Image URLs</li>
  <li>Variant options</li>
</ul>

<h4>2️⃣ Practical Task: Manage Inventory</h4>

<ol>
  <li>Go to <strong>Dashboard → Products → All Products → Choose a Product</strong></li>
  <li><strong>Enable Inventory Tracking:</strong>
    <ul>
      <li>Check <em>Track quantity</em></li>
      <li>Enter quantity in stock (e.g., 100 units)</li>
      <li>Set <em>Continue selling when out of stock</em> if desired</li>
    </ul>
  </li>
  <li><strong>Add Variants (if not added before):</strong>
    <ul>
      <li>Click <em>Add Variant</em></li>
      <li><em>Example:</em> Size → S, M, L; Color → Red, Blue</li>
      <li>Set stock and SKU for each variant</li>
    </ul>
  </li>
  <li><strong>Bulk Update Inventory:</strong>
    <ul>
      <li>Go to <em>Products → All Products → Export (CSV)</em></li>
      <li>Update stock quantities in Excel or Google Sheets</li>
      <li>Import updated CSV back to Shopify</li>
    </ul>
  </li>
</ol>

<h4>3️⃣ Practical Task: CSV Bulk Upload</h4>

<ol>
  <li>Go to <strong>Products → Import → Choose CSV File</strong></li>
  <li>Use Shopify sample CSV as template</li>
  <li>Fill in your sample products:
    <ul>
      <li>Product title</li>
      <li>Description</li>
      <li>Price</li>
      <li>SKU</li>
      <li>Quantity</li>
      <li>Image URLs</li>
    </ul>
  </li>
  <li>Click <strong>Upload & Import</strong> → Shopify will create products automatically</li>
</ol>

<h4>4️⃣ Tips for Day 3</h4>
<ul>
  <li>Keep unique SKUs for every product/variant.</li>
  <li>Regularly check inventory to avoid overselling.</li>
  <li>Use tags and product types for better filtering in bulk updates.</li>
  <li>Always backup CSV files before importing.</li>
</ul>

<p><strong>✅ Day 3 Practical Goal:</strong></p>
<ul>
  <li>You can track inventory, manage variants, and update products in bulk.</li>
  <li>You can handle large stores efficiently with CSV uploads.</li>
</ul>
<p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=02jmeJB9OuE" target="_blank">How To BULK EDIT Products on SHOPIFY Like a Pro!</a></p>
    <p><strong>Description:</strong> Master the art of bulk editing products to save time and maintain consistency across your store.</p>
 `,

    4: `<h3>Day 4 – Orders & Fulfillment</h3>

<p><strong>Goal:</strong> Efficiently manage orders from placement to delivery.</p>

<h4>1️⃣ Theory: Orders & Fulfillment</h4>

<p><strong>Orders:</strong></p>
<p>Every time a customer buys a product, Shopify creates an order record.</p>

<p><strong>Order details include:</strong></p>
<ul>
  <li>Customer info (name, email, address)</li>
  <li>Products ordered, quantity, variants</li>
  <li>Payment status (paid/unpaid)</li>
  <li>Fulfillment status (fulfilled/unfulfilled)</li>
</ul>

<p><strong>Fulfillment:</strong></p>
<p>Refers to picking, packing, and shipping products.</p>

<p><strong>Shopify allows:</strong></p>
<ul>
  <li>Manual fulfillment</li>
  <li>Automatic fulfillment (for digital products or dropshipping)</li>
  <li>Printing invoices & shipping labels</li>
</ul>

<p><strong>Test Orders:</strong></p>
<p>You can simulate orders to practice without real payments. Useful to check workflow and order processing.</p>

<h4>2️⃣ Practical Task: Simulate Orders</h4>

<ol>
  <li><strong>Enable Test Payment Gateway (Optional):</strong>
    <ul>
      <li>Go to <em>Settings → Payments → Manage → Shopify Payments → Enable Test Mode</em></li>
      <li>Allows you to place fake orders without real payment</li>
    </ul>
  </li>
  <li><strong>Place a Test Order:</strong>
    <ul>
      <li>Go to your store → Add product to cart → Checkout</li>
      <li>Enter test customer info → Complete order with test payment</li>
    </ul>
  </li>
  <li><strong>View Order in Dashboard:</strong>
    <ul>
      <li>Go to <em>Orders → All Orders</em></li>
      <li>Check order details: products, quantity, customer info, payment status</li>
    </ul>
  </li>
</ol>

<h4>3️⃣ Practical Task: Fulfill an Order</h4>

<ol>
  <li>Click on the order → <strong>Mark as Fulfilled</strong></li>
  <li>Enter tracking number (if applicable)</li>
  <li>Print invoice or shipping label</li>
  <li>Shopify will send order confirmation and fulfillment emails to customer automatically</li>
</ol>

<h4>4️⃣ Tips for Day 4</h4>
<ul>
  <li>Always check payment status before fulfilling orders.</li>
  <li>For multiple orders, use bulk fulfill option to save time.</li>
  <li>Test orders help understand the customer experience.</li>
  <li>Keep a record of shipments and tracking numbers.</li>
</ul>

<p><strong>✅ Day 4 Practical Goal:</strong></p>
<ul>
  <li>You can process orders, mark them fulfilled, and generate invoices.</li>
  <li>You understand the order flow from customer purchase to delivery.</li>
</ul>
<p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=do01YIxEVKk" target="_blank">How To Fulfill Orders On Shopify - Step By Step Tutorial</a></p>
    <p><strong>Description:</strong> A detailed walkthrough of the order fulfillment process, from receiving orders to shipping them out.</p>
`,
    5: `<h3>Day 5 – Customers & Accounts</h3>

<p><strong>Goal:</strong> Understand Shopify’s customer management and segmentation.</p>

<h4>1️⃣ Theory: Customers in Shopify</h4>

<p><strong>Customer Profiles:</strong></p>
<p>Shopify stores all buyers’ information in one place:</p>
<ul>
  <li>Name, email, phone number</li>
  <li>Shipping & billing addresses</li>
  <li>Order history, total spent, and notes</li>
</ul>

<p><strong>Customer Segmentation:</strong></p>
<p>Group customers based on behavior:</p>
<ul>
  <li><strong>New customers:</strong> First purchase</li>
  <li><strong>Returning customers:</strong> Repeat buyers</li>
  <li><strong>High-value customers:</strong> Spent the most</li>
  <li><strong>Abandoned carts:</strong> Started checkout but didn’t pay</li>
</ul>

<p><strong>Why Segmentation is Important:</strong></p>
<ul>
  <li>Helps send targeted marketing campaigns</li>
  <li>Improves customer retention</li>
  <li>Makes it easier to personalize communication</li>
</ul>

<h4>2️⃣ Practical Task: Explore Customers</h4>

<ol>
  <li>Go to <strong>Dashboard → Customers → All Customers</strong></li>
  <li>Click on a customer → View profile:
    <ul>
      <li>Check order history</li>
      <li>Add notes (e.g., preferences, special requests)</li>
      <li>Edit information if necessary</li>
    </ul>
  </li>
</ol>

<h4>3️⃣ Practical Task: Segment Customers</h4>

<ol>
  <li>In <strong>Customers</strong>, click <strong>Create segment</strong></li>
  <li><strong>Examples of segments:</strong>
    <ul>
      <li><strong>New Customers:</strong> Orders = 1</li>
      <li><strong>Repeat Customers:</strong> Orders &gt; 1</li>
      <li><strong>High Spenders:</strong> Total spent &gt; ₹5000</li>
    </ul>
  </li>
  <li>Save the segment → Shopify will automatically list matching customers</li>
</ol>

<h4>4️⃣ Tips for Day 5</h4>
<ul>
  <li>Keep customer data clean and updated.</li>
  <li>Use tags to categorize customers for marketing (e.g., VIP, Wholesale, Frequent Buyer).</li>
  <li>Monitor abandoned carts regularly for recovery campaigns.</li>
  <li>Always respect privacy & GDPR rules if dealing with sensitive customer data.</li>
</ul>

<p><strong>✅ Day 5 Practical Goal:</strong></p>
<ul>
  <li>You can view and edit customer profiles.</li>
  <li>You can create segments to target specific customer groups.</li>
  <li>You understand how customer data helps in marketing and retention.</li>
</ul>
<p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=0-WXHJPlBrw" target="_blank">Shopify Tutorial - How To Manage Customer Accounts</a></p>
    <p><strong>Description:</strong> Understand how to manage customer accounts, track their activity, and enhance customer experience.</p>
`,
    6: `<h3>Day 6 – Store Settings</h3>

<p><strong>Goal:</strong> Configure your Shopify store for payments, shipping, and taxes.</p>

<h4>1️⃣ Theory: Shopify Store Settings</h4>

<p><strong>Store settings include:</strong></p>
<ul>
  <li><strong>General:</strong> Store name, address, email, and standards</li>
  <li><strong>Payments:</strong> Enable payment gateways for customers to pay</li>
  <li><strong>Shipping & Delivery:</strong> Define shipping rates, zones, and carriers</li>
  <li><strong>Taxes:</strong> Set up tax rules based on location</li>
  <li><strong>Checkout:</strong> Configure checkout options (guest checkout, accounts, order processing)</li>
</ul>

<p><strong>Why it matters:</strong></p>
<ul>
  <li>Proper setup ensures smooth transactions and delivery</li>
  <li>Compliance with tax rules avoids legal issues</li>
</ul>

<h4>2️⃣ Practical Task: Set Up Payment Gateways</h4>

<ol>
  <li>Go to <strong>Settings → Payments</strong></li>
  <li>Enable popular payment methods:
    <ul>
      <li>Razorpay (India)</li>
      <li>PayPal</li>
      <li>Credit/Debit Cards via Shopify Payments</li>
    </ul>
  </li>
  <li>Test payment method in <em>Test Mode</em> (optional)</li>
</ol>

<h4>3️⃣ Practical Task: Set Up Shipping</h4>

<ol>
  <li>Go to <strong>Settings → Shipping & Delivery</strong></li>
  <li>Create <strong>Shipping Profiles</strong> for your products</li>
  <li>Add <strong>Shipping Zones:</strong>
    <ul>
      <li><strong>India:</strong> ₹50 flat rate</li>
      <li><strong>International:</strong> Free / Fixed price</li>
    </ul>
  </li>
  <li>Add <strong>Shipping Methods:</strong> Standard, Express, Next Day</li>
  <li>Test by creating a sample order to check shipping charges</li>
</ol>

<h4>4️⃣ Practical Task: Set Up Taxes</h4>

<ol>
  <li>Go to <strong>Settings → Taxes & Duties</strong></li>
  <li>Enable automatic tax calculation for your country</li>
  <li>Add exceptions if necessary (e.g., GST exemptions)</li>
  <li>Check tax inclusion in product prices</li>
</ol>

<h4>5️⃣ Tips for Day 6</h4>
<ul>
  <li>Always double-check payment gateway integration before going live</li>
  <li>For shipping, consider weight-based or price-based rates depending on products</li>
  <li>Keep tax settings updated with local laws</li>
  <li>Use shipping zones wisely to control delivery costs</li>
</ul>

<p><strong>✅ Day 6 Practical Goal:</strong></p>
<ul>
  <li>You can accept payments safely</li>
  <li>You can set shipping zones and methods</li>
  <li>You can configure taxes accurately for your store</li>
</ul>
<p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=tlXHPg411zI" target="_blank">Shopify Store Design Tutorial 2024 - Full Website Guide</a></p>
    <p><strong>Description:</strong> Learn how to customize your store's theme, set up navigation, and configure essential settings.</p>
`,
    7: `<h3>Day 7 – Store Policies</h3>

<p><strong>Goal:</strong> Learn how to create and update refund, shipping, and privacy policies for your Shopify store.</p>

<h4>1️⃣ Theory: Importance of Store Policies</h4>

<p><strong>Why policies matter:</strong></p>
<ul>
  <li>Build trust with customers</li>
  <li>Reduce disputes and chargebacks</li>
  <li>Comply with legal and e-commerce regulations</li>
</ul>

<p><strong>Main Shopify Policies:</strong></p>
<ul>
  <li><strong>Refund Policy:</strong> Conditions for returns and refunds</li>
  <li><strong>Shipping Policy:</strong> Delivery timelines, shipping fees, carriers</li>
  <li><strong>Privacy Policy:</strong> How customer data is collected, stored, and used</li>
  <li><strong>Terms of Service (optional):</strong> Rules for using your website and products</li>
</ul>

<h4>2️⃣ Practical Task: Create Policies in Shopify</h4>

<ol>
  <li>Go to <strong>Settings → Legal</strong></li>
  <li>You’ll see sections for:
    <ul>
      <li>Refund Policy</li>
      <li>Privacy Policy</li>
      <li>Terms of Service</li>
      <li>Shipping Policy</li>
    </ul>
  </li>
  <li>Shopify provides templates for each policy:
    <ul>
      <li>Click <em>Create from template</em> → Edit to fit your store</li>
    </ul>
  </li>
  <li><strong>Example for Refund Policy:</strong><br>
    “Customers can return items within 15 days for a full refund. Products must be unused and in original packaging.”
  </li>
  <li>Save policies → These will automatically display on the checkout page and footer of your website</li>
</ol>

<h4>3️⃣ Tips for Day 7</h4>
<ul>
  <li>Keep policies clear, simple, and customer-friendly</li>
  <li>Update policies if shipping carriers, prices, or return conditions change</li>
  <li>Add contact information in policies for customer support</li>
  <li>Display policies prominently to increase customer trust</li>
</ul>

<p><strong>✅ Day 7 Practical Goal:</strong></p>
<ul>
  <li>You can create professional store policies</li>
  <li>Policies will appear automatically on checkout and footer</li>
  <li>Your store is now ready for customers to shop confidently</li>
</ul>

<h4>🎯 Week 1 Complete!</h4>
<p>By now, you’ve learned Shopify basics, products, inventory, orders, customers, settings, and policies.</p>
<p>You can navigate and manage a basic Shopify store independently.</p>
<p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=0-WXHJPlBrw" target="_blank">Shopify Tutorial - How To Manage Customer Accounts</a></p>
    <p><strong>Description:</strong> While this video focuses on customer accounts, it also touches upon setting up and managing store policies.</p>
`,
    8: `<h3>Day 8 – Store Customization</h3>

<p><strong>Goal:</strong> Customize your Shopify theme, homepage, and branding.</p>

<h4>1️⃣ Theory: Shopify Store Customization</h4>

<p><strong>Why customization matters:</strong></p>
<ul>
  <li>First impression influences sales</li>
  <li>Clear navigation improves user experience</li>
  <li>Branding (logo, colors, banners) strengthens brand identity</li>
</ul>

<p><strong>What you can customize:</strong></p>
<ul>
  <li><strong>Theme:</strong> Determines overall design, layout, fonts, and colors</li>
  <li><strong>Homepage sections:</strong> Slideshows, featured products, collections, testimonials</li>
  <li><strong>Header & Footer:</strong> Logo, menu, contact info, social links</li>
  <li><strong>Colors & Fonts:</strong> Match your brand style</li>
  <li><strong>Custom CSS (optional):</strong> For advanced styling</li>
</ul>

<h4>2️⃣ Practical Task: Customize Theme</h4>

<ol>
  <li>Go to <strong>Online Store → Themes</strong></li>
  <li>Click <strong>Customize</strong> on your current theme</li>
  <li><strong>Homepage Sections:</strong>
    <ul>
      <li>Add Slideshow or Banner with attractive images</li>
      <li>Add Featured Products or Collections</li>
      <li>Add Testimonials or About Us snippet</li>
      <li>Rearrange sections by dragging</li>
    </ul>
  </li>
  <li><strong>Colors & Fonts:</strong>
    <ul>
      <li>In theme editor → Theme Settings → Colors / Typography</li>
      <li>Set your brand colors and font style</li>
    </ul>
  </li>
  <li><strong>Header & Footer:</strong>
    <ul>
      <li>Add logo (Online Store → Themes → Customize → Header)</li>
      <li>Add menu items (Home, Shop, About, Contact)</li>
      <li>Add social media links in footer</li>
    </ul>
  </li>
</ol>

<h4>3️⃣ Tips for Day 8</h4>
<ul>
  <li>Keep consistent branding: same fonts and colors</li>
  <li>Use high-quality images for banners and slideshows</li>
  <li>Keep homepage simple and easy to navigate</li>
  <li>Preview changes on desktop and mobile before publishing</li>
</ul>

<p><strong>✅ Day 8 Practical Goal:</strong></p>
<ul>
  <li>You can customize your store’s homepage, header, footer, and theme settings</li>
  <li>Your store now looks professional and aligned with your brand</li>
</ul>
 <p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=tlXHPg411zI" target="_blank">Shopify Store Design Tutorial 2024 - Full Website Guide</a></p>
    <p><strong>Description:</strong> Dive deeper into customizing your store's appearance to align with your brand identity.</p>
 `, 9: `<h3>Day 9 – Content Management</h3>

<p><strong>Goal:</strong> Learn to manage content that engages customers and improves SEO.</p>

<h4>1️⃣ Theory: Content in Shopify</h4>

<p><strong>Why content matters:</strong></p>
<ul>
  <li>Helps customers understand your brand and products</li>
  <li>Improves search engine ranking (SEO)</li>
  <li>Builds trust and credibility</li>
</ul>

<p><strong>Types of content in Shopify:</strong></p>
<ul>
  <li><strong>Blog Posts:</strong> Share news, tips, and product guides</li>
  <li><strong>Pages:</strong> About Us, Contact Us, FAQ, Policies</li>
  <li><strong>SEO Fields:</strong> Page title, meta description, alt text for images</li>
</ul>

<h4>2️⃣ Practical Task: Add Blog Posts</h4>

<ol>
  <li>Go to <strong>Online Store → Blog Posts → Add Blog Post</strong></li>
  <li>Fill in:
    <ul>
      <li><strong>Title:</strong> “Top 5 Tips for Choosing the Perfect T-Shirt”</li>
      <li><strong>Content:</strong> Write 3–5 paragraphs with product mentions</li>
      <li><strong>Featured image:</strong> Upload relevant image</li>
    </ul>
  </li>
  <li><strong>SEO Settings:</strong>
    <ul>
      <li>Edit URL handle → example: <code>/blog/top-t-shirt-tips</code></li>
      <li>Meta title & description → include keywords like “T-Shirt Tips”</li>
    </ul>
  </li>
  <li>Save and publish post</li>
</ol>

<h4>3️⃣ Practical Task: Edit Key Pages</h4>

<ol>
  <li>Go to <strong>Online Store → Pages → Add Page</strong> or edit existing</li>
  <li><strong>Examples:</strong>
    <ul>
      <li><strong>About Us:</strong> Share brand story, mission, and values</li>
      <li><strong>Contact Us:</strong> Include contact form, email, phone, and address</li>
      <li><strong>FAQ:</strong> Answer common questions about products, shipping, returns</li>
    </ul>
  </li>
  <li><strong>SEO Optimization:</strong>
    <ul>
      <li>Include keywords naturally</li>
      <li>Add internal links to products or collections</li>
      <li>Use images with alt text for accessibility</li>
    </ul>
  </li>
</ol>

<h4>4️⃣ Tips for Day 9</h4>
<ul>
  <li>Write clear, engaging, and concise content</li>
  <li>Use keywords naturally, don’t stuff them</li>
  <li>Update content regularly to keep it fresh for SEO</li>
  <li>Include call-to-action (CTA) like “Shop Now” or “Learn More”</li>
</ul>

<p><strong>✅ Day 9 Practical Goal:</strong></p>
<ul>
  <li>You can create and publish blog posts</li>
  <li>You can edit pages like About Us, Contact, and FAQ</li>
  <li>Your content is optimized for customers and search engines</li>
</ul><p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=0-WXHJPlBrw" target="_blank">Shopify Tutorial - How To Manage Customer Accounts</a></p>
    <p><strong>Description:</strong> This video provides insights into managing customer accounts, which is essential for content personalization.</p>
 `, 10: `<h3>Day 10 – Discounts & Promotions</h3>

<p><strong>Goal:</strong> Learn to create discounts and promotions to attract and retain customers.</p>

<h4>1️⃣ Theory: Discounts & Promotions</h4>

<p><strong>Why discounts matter:</strong></p>
<ul>
  <li>Encourage first-time purchases</li>
  <li>Reward loyal customers</li>
  <li>Boost sales during festivals or special events</li>
</ul>

<p><strong>Types of Discounts in Shopify:</strong></p>
<ul>
  <li><strong>Discount Codes (Manual):</strong> Customers enter a code at checkout</li>
  <li><strong>Automatic Discounts:</strong> Applied automatically when conditions are met</li>
  <li><strong>Limited-Time Offers:</strong> Encourage urgency and quick purchases</li>
</ul>

<p><strong>Discount Conditions:</strong></p>
<ul>
  <li>Percentage off (e.g., 10% off)</li>
  <li>Fixed amount off (e.g., ₹200 off)</li>
  <li>Free shipping</li>
  <li>Minimum purchase amount or specific products</li>
</ul>

<h4>2️⃣ Practical Task: Create Discount Codes</h4>

<ol>
  <li>Go to <strong>Discounts → Create Discount</strong></li>
  <li>Select <strong>Discount Code</strong></li>
  <li>Fill in details:
    <ul>
      <li><strong>Code:</strong> “WELCOME10”</li>
      <li><strong>Type:</strong> Percentage (10%)</li>
      <li><strong>Applies to:</strong> All products or specific collection</li>
      <li><strong>Minimum purchase:</strong> Optional</li>
      <li><strong>Usage limits:</strong> Optional (e.g., one-time per customer)</li>
      <li><strong>Set Start and End Dates</strong></li>
    </ul>
  </li>
  <li>Save and test on checkout</li>
</ol>

<h4>3️⃣ Practical Task: Create Automatic Discounts</h4>

<ol>
  <li>Go to <strong>Discounts → Automatic Discounts → Create Automatic Discount</strong></li>
  <li>Choose condition:
    <ul>
      <li><strong>Example:</strong> Buy 2 T-Shirts → Get 5% off</li>
    </ul>
  </li>
  <li>Set start and end dates</li>
  <li>Save and test by adding products to cart</li>
</ol>

<h4>4️⃣ Practical Task: Limited-Time Offers</h4>

<ul>
  <li>Highlight discounts on homepage banners or pop-ups</li>
  <li><strong>Example:</strong> “Mega Sale – 20% Off Today Only”</li>
  <li>Use apps like <em>Countdown Timer</em> to create urgency</li>
</ul>

<h4>5️⃣ Tips for Day 10</h4>
<ul>
  <li>Avoid too many overlapping discounts – it can confuse customers</li>
  <li>Track which discounts perform best in Analytics</li>
  <li>Use discounts strategically for holidays, festivals, or slow-moving products</li>
  <li>Test discount codes before announcing to customers</li>
</ul>

<p><strong>✅ Day 10 Practical Goal:</strong></p>
<ul>
  <li>You can create manual discount codes and automatic discounts</li>
  <li>You can set up limited-time promotions to boost sales</li>
  <li>You understand how to strategically use discounts to increase conversions</li>
</ul>
<p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=Jwc9dwFQvf8" target="_blank">Shopify Email Marketing for Noobs (But it's free)</a></p>
    <p><strong>Description:</strong> Learn how to create and manage discount codes to attract and retain customers.</p>
 `, 11: `<h3>Day 11 – Shopify Apps</h3>

<p><strong>Goal:</strong> Explore essential apps for marketing, sales, and customer engagement.</p>

<h4>1️⃣ Theory: Why Use Shopify Apps</h4>

<p>Shopify apps extend the functionality of your store beyond default features.</p>

<p><strong>Common purposes:</strong></p>
<ul>
  <li><strong>Reviews:</strong> Build trust with customer feedback</li>
  <li><strong>SEO Optimization:</strong> Improve search engine ranking</li>
  <li><strong>Live Chat:</strong> Communicate with customers instantly</li>
  <li><strong>Abandoned Cart Recovery:</strong> Bring back potential customers</li>
</ul>

<p><strong>Where to find apps:</strong></p>
<ul>
  <li>Go to <a href="https://apps.shopify.com" target="_blank">Shopify App Store</a> → Search and install apps</li>
  <li>Some are free, some are paid with trials</li>
</ul>

<h4>2️⃣ Practical Task: Install Essential Apps</h4>

<p><strong>a) Product Reviews</strong></p>
<ol>
  <li>Go to Shopify App Store → Search “Product Reviews”</li>
  <li>Click <strong>Add App</strong> → Install App</li>
  <li>Configure:
    <ul>
      <li>Enable review form</li>
      <li>Choose where reviews appear (product page)</li>
    </ul>
  </li>
</ol>

<p><strong>b) SEO Booster</strong></p>
<ol>
  <li>Search “SEO Booster” in App Store</li>
  <li>Install and connect to your store</li>
  <li>Use it to optimize meta titles, descriptions, and keywords</li>
</ol>

<p><strong>c) WhatsApp Chat / Live Chat</strong></p>
<ol>
  <li>Search “WhatsApp Chat + Messenger”</li>
  <li>Install and configure number</li>
  <li>Chat button appears on store → Customers can message directly</li>
</ol>

<p><strong>d) Abandoned Cart Recovery</strong></p>
<ol>
  <li>Shopify has built-in abandoned cart emails</li>
  <li>Or use apps like Klaviyo / Recart</li>
  <li>Configure email template → Automatic emails are sent to customers who leave items in cart</li>
</ol>

<h4>3️⃣ Tips for Day 11</h4>
<ul>
  <li>Don’t install too many apps → can slow down the store</li>
  <li>Test each app on desktop and mobile before going live</li>
  <li>Monitor performance impact and app effectiveness</li>
  <li>Keep apps updated to avoid conflicts with Shopify updates</li>
</ul>

<p><strong>✅ Day 11 Practical Goal:</strong></p>
<ul>
  <li>You can install and configure essential Shopify apps</li>
  <li>You understand how apps can boost sales and improve customer engagement</li>
</ul>
<p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=4alkTclb72g" target="_blank">How To Install Shopify Apps In Your Store | Step-by-Step Tutorial</a></p>
    <p><strong>Description:</strong> Understand how to enhance your store's functionality by installing and configuring Shopify apps.</p>
 `, 12: `<h3>Day 12 – Email Marketing</h3>

<p><strong>Goal:</strong> Set up email marketing campaigns and automate abandoned cart recovery.</p>

<h4>1️⃣ Theory: Why Email Marketing Matters</h4>

<ul>
  <li>Direct communication with customers</li>
  <li>Increases repeat purchases and customer retention</li>
  <li>Promotes new products, discounts, and offers</li>
  <li>Helps recover abandoned carts</li>
</ul>

<p><strong>Tools in Shopify:</strong></p>
<ul>
  <li><strong>Shopify Email:</strong> Built-in app for email campaigns</li>
  <li><strong>Klaviyo:</strong> Advanced automation and analytics</li>
  <li><strong>Other Apps:</strong> Omnisend, Mailchimp</li>
</ul>

<h4>2️⃣ Practical Task: Create a Campaign with Shopify Email</h4>

<ol>
  <li>Go to <strong>Marketing → Create Campaign → Shopify Email</strong></li>
  <li>Choose template (e.g., product promotion, newsletter)</li>
  <li>Add content:
    <ul>
      <li><strong>Title:</strong> “Summer Sale – Up to 20% Off!”</li>
      <li><strong>Images:</strong> Upload images of products on sale</li>
      <li><strong>CTA:</strong> “Shop Now”</li>
    </ul>
  </li>
  <li>Select recipients: All customers, segment, or manual list</li>
  <li>Send test email → Schedule or send immediately</li>
</ol>

<h4>3️⃣ Practical Task: Set Up Abandoned Cart Recovery</h4>

<ol>
  <li>Go to <strong>Settings → Checkout → Abandoned Checkout</strong></li>
  <li>Enable <em>Send automated email after X hours</em> (e.g., 6 hours)</li>
  <li>Customize email template:
    <ul>
      <li>Include customer name</li>
      <li>Highlight items left in cart</li>
      <li>Add CTA button: “Complete Your Purchase”</li>
    </ul>
  </li>
  <li>Save → Shopify automatically sends emails to customers</li>
</ol>

<h4>4️⃣ Tips for Day 12</h4>

<ul>
  <li>Personalize emails with customer name and product info</li>
  <li>Keep subject lines short and engaging</li>
  <li>Test campaigns on desktop and mobile</li>
  <li>Monitor open rate, click rate, and conversion in Shopify analytics</li>
  <li>Avoid sending too many emails, which can annoy customers</li>
</ul>

<p><strong>✅ Day 12 Practical Goal:</strong></p>
<ul>
  <li>You can create email campaigns to promote products</li>
  <li>You can set up automated abandoned cart recovery emails</li>
  <li>You understand how email marketing can increase sales</li>
</ul><p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=-YmkL-QS5FM" target="_blank">How To Setup Shopify Email Marketing (Step-by-Step)</a></p>
    <p><strong>Description:</strong> A beginner-friendly guide to setting up email marketing campaigns using Shopify's built-in tools.</p>
 `, 13: `<h3>Day 13 – Sales Channels Integration</h3>

<p><strong>Goal:</strong> Integrate Shopify with Facebook, Instagram, and Google Shopping to sell on multiple platforms.</p>

<h4>1️⃣ Theory: Why Integrate Sales Channels</h4>

<ul>
  <li>Reach more customers on platforms they already use</li>
  <li>Sell directly on social media without a separate website</li>
  <li>Sync products, inventory, and orders across platforms</li>
</ul>

<p><strong>Common Shopify Sales Channels:</strong></p>
<ul>
  <li><strong>Facebook & Instagram Shop:</strong> Sell directly on social media</li>
  <li><strong>Google Shopping:</strong> Appear in Google search results and ads</li>
  <li><strong>Pinterest:</strong> Showcase products in a visual catalog</li>
  <li><strong>Amazon / eBay:</strong> Expand to marketplaces</li>
</ul>

<h4>2️⃣ Practical Task: Connect Facebook & Instagram Shop</h4>

<ol>
  <li>Go to <strong>Settings → Sales Channels → Add Channel → Facebook</strong></li>
  <li>Connect Facebook Business account and Instagram account</li>
  <li>Sync products:
    <ul>
      <li>Select collections to show on shop</li>
      <li>Products must meet Facebook commerce policies</li>
      <li>Check that inventory and prices sync automatically</li>
    </ul>
  </li>
</ol>

<h4>3️⃣ Practical Task: Connect Google Shopping</h4>

<ol>
  <li>Add Google channel in Shopify</li>
  <li>Connect Google Merchant Center account</li>
  <li>Sync products:
    <ul>
      <li>Titles, descriptions, images, and prices are automatically shared</li>
      <li>Set up Google Ads if you want paid promotion</li>
    </ul>
  </li>
</ol>

<h4>4️⃣ Tips for Day 13</h4>

<ul>
  <li>Ensure product images and descriptions meet platform guidelines</li>
  <li>Regularly sync inventory to avoid overselling</li>
  <li>Monitor sales performance from each channel in Shopify analytics</li>
  <li>Start with 1–2 channels, then expand gradually</li>
</ul>

<p><strong>✅ Day 13 Practical Goal:</strong></p>
<ul>
  <li>You can connect Shopify to social media and Google Shopping</li>
  <li>Your products are ready to be sold on multiple platforms</li>
  <li>You understand the benefits of multi-channel selling</li>
</ul><p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=0-WXHJPlBrw" target="_blank">Shopify Tutorial - How To Manage Customer Accounts</a></p>
    <p><strong>Description:</strong> While focusing on customer accounts, this video also covers integrating various sales channels.</p>
 `, 14: `<h3>Day 14 – Review & Practice</h3>

<p><strong>Goal:</strong> Practice the full workflow of adding, promoting, selling, and fulfilling products.</p>

<h4>1️⃣ Workflow Practice: Step by Step</h4>

<ol>
  <li><strong>Step 1: Add Products</strong>
    <ul>
      <li>Add 3–5 new products with all details:</li>
      <li>Title, Description, Images, Price, Variants, SKU</li>
    </ul>
  </li>

  <li><strong>Step 2: Organize Collections</strong>
    <ul>
      <li>Assign products to manual or automatic collections</li>
    </ul>
  </li>

  <li><strong>Step 3: Customize Store</strong>
    <ul>
      <li>Update homepage sections</li>
      <li>Add banners for promotions or discounts</li>
    </ul>
  </li>

  <li><strong>Step 4: Set Up Discounts / Promotions</strong>
    <ul>
      <li>Create discount codes for one product</li>
      <li>Test automatic discounts for another product</li>
    </ul>
  </li>

  <li><strong>Step 5: Integrate Sales Channels</strong>
    <ul>
      <li>Check that products are synced to Facebook, Instagram, or Google Shopping</li>
    </ul>
  </li>

  <li><strong>Step 6: Simulate a Customer Order</strong>
    <ul>
      <li>Add product to cart → Checkout (use test payment if needed)</li>
      <li>Process the order → Mark as fulfilled</li>
      <li>Send confirmation email (Shopify automates this)</li>
    </ul>
  </li>
</ol>

<h4>2️⃣ Tips for Day 14</h4>

<ul>
  <li>Treat this as a mini project to simulate real store operations</li>
  <li>Make sure all inventory, prices, and variants are accurate</li>
  <li>Test discounts and promotions to ensure they work correctly</li>
  <li>Observe customer experience from homepage to checkout</li>
</ul>

<p><strong>✅ Day 14 Practical Goal:</strong></p>
<ul>
  <li>You can handle a complete store workflow end-to-end</li>
  <li>You know how to add products, promote them, sell, and fulfill orders</li>
  <li>You are confident using Shopify tools learned so far</li>
</ul><p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=nJMqRgKkkBg" target="_blank">Shopify Tutorials | Build Your Store, Manage Products & More!</a></p>
    <p><strong>Description:</strong> A playlist offering a range of tutorials to reinforce your learning and practice different aspects of Shopify management.</p>
 `, 15: `<h3>Day 15 – SEO Basics</h3>

<p><strong>Goal:</strong> Optimize product pages, images, and metadata to improve search engine ranking.</p>

<h4>1️⃣ Theory: Why SEO Matters</h4>

<ul>
  <li>SEO (Search Engine Optimization) increases visibility on Google and other search engines</li>
  <li>Higher ranking → More organic traffic → More potential sales</li>
  <li>Shopify has built-in SEO tools for pages, products, and blogs</li>
</ul>

<p><strong>Key SEO Elements:</strong></p>
<ul>
  <li><strong>Product Titles & Descriptions:</strong> Include relevant keywords</li>
  <li><strong>Meta Title & Meta Description:</strong> Shown in search results</li>
  <li><strong>Alt Text for Images:</strong> Helps search engines understand images</li>
  <li><strong>URL Structure:</strong> Short, readable, and keyword-rich</li>
  <li><strong>Internal Links:</strong> Connect products, collections, and blog posts</li>
</ul>

<h4>2️⃣ Practical Task: Optimize Product Pages</h4>

<ol>
  <li>Go to <strong>Products → Select a Product → Edit SEO</strong></li>
  <li>Edit Website SEO:
    <ul>
      <li><strong>Page title:</strong> Include product name + keyword (e.g., “Red Cotton T-Shirt – Men’s Summer Wear”)</li>
      <li><strong>Meta description:</strong> Short, engaging description with keywords</li>
      <li><strong>URL handle:</strong> <code>/red-cotton-tshirt</code></li>
    </ul>
  </li>
  <li><strong>Alt Text for Images:</strong>
    <ul>
      <li>Example: “Red Cotton T-Shirt for Men, Summer Wear”</li>
    </ul>
  </li>
</ol>

<h4>3️⃣ Practical Task: Optimize Collections & Blog Pages</h4>

<ol>
  <li>Go to <strong>Collections → Edit SEO</strong></li>
  <li><strong>Title:</strong> Include main keyword (e.g., “Men’s Summer T-Shirts Collection”)</li>
  <li><strong>Description:</strong> Include collection features, highlight promotions</li>
  <li><strong>URL:</strong> <code>/mens-summer-tshirts</code></li>
  <li>Go to <strong>Blog Posts → Edit SEO</strong></li>
  <li>Use keywords in title, meta description, and headings</li>
  <li>Include internal links to products/collections</li>
</ol>

<h4>4️⃣ Tips for Day 15</h4>

<ul>
  <li>Use relevant keywords, not just high-volume words</li>
  <li>Keep meta descriptions under 160 characters</li>
  <li>Use natural language for readability</li>
  <li>Add alt text for all images, even banners</li>
  <li>Check SEO performance using Google Search Console</li>
</ul>

<p><strong>✅ Day 15 Practical Goal:</strong></p>
<ul>
  <li>You can optimize product, collection, and blog pages for SEO</li>
  <li>You understand how SEO improves visibility and traffic</li>
  <li>Your store is now search-engine friendly</li>
</ul><p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=LMGj7N2iW2A" target="_blank">Shopify SEO Optimization Tutorial For Beginners</a></p>
    <p><strong>Description:</strong> Learn the fundamentals of SEO to improve your store's visibility on search engines.</p>
`,
    16: `<h3>Day 16 – Analytics Overview</h3>

<p><strong>Goal:</strong> Understand store performance through analytics to make data-driven decisions.</p>

<h4>1️⃣ Theory: Why Analytics Matters</h4>

<p>Analytics helps you understand customer behavior, sales trends, and marketing effectiveness.</p>

<p><strong>Shopify and Google Analytics provide insights for:</strong></p>
<ul>
  <li><strong>Sales reports:</strong> Revenue, orders, refunds</li>
  <li><strong>Customer reports:</strong> Returning vs new customers, locations</li>
  <li><strong>Traffic sources:</strong> How visitors find your store (Google, social media, email)</li>
  <li><strong>Product performance:</strong> Best-selling and underperforming products</li>
</ul>

<p><strong>Key Metrics:</strong></p>
<ul>
  <li><strong>Conversion rate:</strong> % of visitors who make a purchase</li>
  <li><strong>Average order value (AOV):</strong> Average revenue per order</li>
  <li><strong>Customer lifetime value (CLV):</strong> Predicted revenue from a customer over time</li>
  <li><strong>Cart abandonment rate:</strong> % of customers who leave without purchasing</li>
</ul>

<h4>2️⃣ Practical Task: Shopify Analytics</h4>

<ol>
  <li>Go to <strong>Dashboard → Analytics → Reports</strong></li>
  <li>Explore sections:
    <ul>
      <li><strong>Sales over time:</strong> Check daily, weekly, monthly sales</li>
      <li><strong>Customers:</strong> New vs returning, top locations</li>
      <li><strong>Products:</strong> Top-selling products, low-performing items</li>
    </ul>
  </li>
  <li>Use <strong>Live View</strong> to see visitors in real-time</li>
</ol>

<h4>3️⃣ Practical Task: Google Analytics Setup</h4>

<ol>
  <li>Go to <strong>Google Analytics → Admin → Property → Data Streams → Web</strong></li>
  <li>Add your Shopify store URL</li>
  <li>Copy the <strong>Measurement ID</strong></li>
  <li>In Shopify:
    <ul>
      <li>Go to <strong>Settings → Analytics → Google Analytics</strong></li>
      <li>Paste the Measurement ID</li>
    </ul>
  </li>
  <li>Track traffic sources, user behavior, and conversion funnels</li>
</ol>

<h4>4️⃣ Tips for Day 16</h4>

<ul>
  <li>Check analytics daily for trends, weekly for performance evaluation</li>
  <li>Identify top-performing products to focus marketing efforts</li>
  <li>Monitor cart abandonment rate and improve checkout experience</li>
  <li>Use traffic source data to optimize campaigns (e.g., Facebook, Instagram, Google Ads)</li>
</ul>

<p><strong>✅ Day 16 Practical Goal:</strong></p>
<ul>
  <li>You can read Shopify and Google Analytics reports</li>
  <li>You understand sales, customer, and product performance</li>
  <li>You can use analytics to make informed business decisions</li>
</ul><p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=uUkIiWTe2aA" target="_blank">Shopify Analytics 2025 Full Tutorial - Understand Your Data</a></p>
    <p><strong>Description:</strong> A comprehensive guide to understanding and utilizing Shopify's analytics tools to track store performance.</p>
`, 17: `<h3>Day 17 – Abandoned Cart Recovery</h3>

<p><strong>Goal:</strong> Reduce lost sales by automatically recovering abandoned carts.</p>

<h4>1️⃣ Theory: Why Abandoned Cart Recovery Matters</h4>

<ul>
  <li>On average, 70% of online shoppers abandon their carts</li>
  <li>Recovering these carts can significantly increase sales</li>
  <li>Shopify allows automated emails or SMS reminders</li>
</ul>

<p><strong>How it works:</strong></p>
<ul>
  <li>Shopify tracks when a customer adds items but doesn’t complete checkout</li>
  <li>You can send automated emails after a set delay</li>
  <li>Email reminds the customer and encourages completion with:
    <ul>
      <li>Product summary</li>
      <li>Discount code (optional)</li>
      <li>Call-to-action (CTA) button</li>
    </ul>
  </li>
</ul>

<h4>2️⃣ Practical Task: Enable Abandoned Cart Emails</h4>

<ol>
  <li>Go to <strong>Settings → Checkout → Abandoned Checkout</strong></li>
  <li>Enable <strong>Send automated email</strong></li>
  <li>Set delay timing (e.g., 6 hours after abandonment)</li>
  <li>Customize email template:
    <ul>
      <li><strong>Greeting:</strong> “Hi [First Name]”</li>
      <li><strong>Mention:</strong> Items left in cart</li>
      <li><strong>CTA:</strong> “Complete Your Purchase”</li>
    </ul>
  </li>
  <li>Save settings</li>
</ol>

<h4>3️⃣ Practical Task: Test the Recovery Flow</h4>

<ol>
  <li>Add a product to your cart → Start checkout → Leave the page without paying</li>
  <li>Wait for the automated email (or send a test email)</li>
  <li>Check that the cart items and CTA appear correctly</li>
</ol>

<h4>4️⃣ Tips for Day 17</h4>

<ul>
  <li>Personalize emails using customer name and product info</li>
  <li>Offer a small discount or free shipping if needed to encourage completion</li>
  <li>Avoid sending too many reminders, which can annoy customers</li>
  <li>Monitor recovered sales in <strong>Shopify Analytics → Reports → Abandoned Checkouts</strong></li>
</ul>

<p><strong>✅ Day 17 Practical Goal:</strong></p>
<ul>
  <li>You can set up automated abandoned cart emails</li>
  <li>You can test the recovery process</li>
  <li>You understand how abandoned cart recovery increases sales</li>
</ul><p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=Jwc9dwFQvf8" target="_blank">Shopify Email Marketing for Noobs (But it's free)</a></p>
    <p><strong>Description:</strong> Strategies to recover abandoned carts and convert them into sales using email marketing.</p>
`, 18: `<h3>Day 18 – Upselling & Cross-selling</h3>

<p><strong>Goal:</strong> Boost sales by encouraging customers to buy more.</p>

<h4>1️⃣ Theory: Upselling vs Cross-selling</h4>

<p><strong>Upselling:</strong> Encourage customers to buy a higher-end version of the product</p>
<p><em>Example:</em> “Upgrade to premium leather bag for ₹500 more”</p>

<p><strong>Cross-selling:</strong> Suggest related or complementary products</p>
<p><em>Example:</em> “Add matching wallet to your leather bag”</p>

<p><strong>Why it matters:</strong></p>
<ul>
  <li>Increases average order value (AOV)</li>
  <li>Improves customer satisfaction with helpful suggestions</li>
  <li>Can boost sales without acquiring new customers</li>
</ul>

<h4>2️⃣ Practical Task: Install Upsell Apps</h4>

<ol>
  <li>Go to <strong>Shopify App Store → Search “Upsell / Cross-sell”</strong></li>
  <li><strong>Popular apps:</strong>
    <ul>
      <li>Frequently Bought Together</li>
      <li>Bold Upsell</li>
      <li>Recom.ai</li>
    </ul>
  </li>
  <li>Install the app → Configure settings:
    <ul>
      <li>Choose products for upsell or cross-sell</li>
      <li>Decide where suggestions appear (product page, cart, checkout)</li>
    </ul>
  </li>
</ol>

<h4>3️⃣ Practical Task: Create Product Bundles</h4>

<ol>
  <li>Use the upsell app or Shopify’s bundle products feature</li>
  <li><strong>Example:</strong>
    <ul>
      <li><strong>Product 1:</strong> Leather Bag</li>
      <li><strong>Bundle:</strong> Leather Bag + Wallet + Keychain → 10% discount</li>
    </ul>
  </li>
  <li>Display bundles on product page and homepage</li>
</ol>

<h4>4️⃣ Tips for Day 18</h4>

<ul>
  <li>Only suggest relevant products; don’t overwhelm customers</li>
  <li>Highlight discounts or special offers for bundles</li>
  <li>Monitor which upsell/cross-sell offers convert best</li>
  <li>Test placement of recommendations (product page vs cart)</li>
</ul>

<p><strong>✅ Day 18 Practical Goal:</strong></p>
<ul>
  <li>You can set up upsell and cross-sell offers</li>
  <li>You can create product bundles to increase sales</li>
  <li>You understand how these strategies boost average order value</li>
</ul><p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=nJMqRgKkkBg" target="_blank">Shopify Tutorials | Build Your Store, Manage Products & More!</a></p>
    <p><strong>Description:</strong> Explore techniques to increase average order value through upselling and cross-selling.</p>
  `, 19: `<h3>Day 19 – Reviews & UGC</h3>

<p><strong>Goal:</strong> Increase credibility, social proof, and SEO using customer reviews and content.</p>

<h4>1️⃣ Theory: Why Reviews & UGC Matter</h4>

<ul>
  <li><strong>Customer trust:</strong> 90% of buyers read reviews before purchasing</li>
  <li><strong>SEO benefits:</strong> Reviews provide fresh, keyword-rich content</li>
  <li><strong>Social proof:</strong> Positive reviews influence purchasing decisions</li>
</ul>

<p><strong>UGC (User-Generated Content):</strong></p>
<ul>
  <li>Includes reviews, photos, videos, testimonials shared by customers</li>
  <li>Encourages engagement and brand loyalty</li>
</ul>

<h4>2️⃣ Practical Task: Install a Review App</h4>

<ol>
  <li>Go to <strong>Shopify App Store → Search “Product Reviews”</strong></li>
  <li><strong>Popular apps:</strong>
    <ul>
      <li>Loox (photo reviews)</li>
      <li>Judge.me</li>
      <li>Yotpo</li>
    </ul>
  </li>
  <li>Install the app → Configure settings:
    <ul>
      <li>Enable review form on product pages</li>
      <li>Collect ratings, text, and photos</li>
      <li>Moderate reviews before publishing (optional)</li>
    </ul>
  </li>
</ol>

<h4>3️⃣ Practical Task: Add Reviews & Showcase UGC</h4>

<ol>
  <li>Manually add sample reviews or request reviews from test customers</li>
  <li>Display reviews on product page, homepage, or collection pages</li>
  <li>Encourage customers to submit photos/videos of products</li>
</ol>

<h4>4️⃣ Tips for Day 19</h4>

<ul>
  <li>Send follow-up emails requesting reviews after purchase</li>
  <li>Offer small incentives (e.g., discount on next order)</li>
  <li>Respond to negative reviews politely → Shows professionalism</li>
  <li>Regularly feature top reviews on homepage or social media</li>
</ul>

<p><strong>✅ Day 19 Practical Goal:</strong></p>
<ul>
  <li>You can install and configure review apps</li>
  <li>You can display customer reviews and UGC</li>
  <li>You understand how reviews build trust, social proof, and SEO benefits</li>
</ul><p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=0-WXHJPlBrw" target="_blank">Shopify Tutorial - How To Manage Customer Accounts</a></p>
    <p><strong>Description:</strong> This video provides insights into managing customer accounts, which is essential for leveraging user-generated content.</p>
 `, 20: `<h3>Day 20 – Loyalty Programs & Referrals</h3>

<p><strong>Goal:</strong> Boost customer retention and lifetime value with loyalty and referral programs.</p>

<h4>1️⃣ Theory: Why Loyalty & Referrals Matter</h4>

<ul>
  <li>Customer retention is cheaper than acquiring new customers</li>
  <li>Loyal customers spend more and buy repeatedly</li>
  <li>Referrals bring new customers at low cost</li>
  <li>Loyalty programs reward points, discounts, or exclusive offers</li>
</ul>

<p><strong>Types of Programs:</strong></p>
<ul>
  <li><strong>Points-based:</strong> Customers earn points for purchases, reviews, referrals</li>
  <li><strong>Tier-based:</strong> Reward frequent shoppers with higher benefits</li>
  <li><strong>Referral rewards:</strong> Existing customers get rewards for referring friends</li>
</ul>

<h4>2️⃣ Practical Task: Install Loyalty & Referral Apps</h4>

<ol>
  <li>Go to <strong>Shopify App Store → Search “Loyalty Program”</strong></li>
  <li><strong>Popular apps:</strong>
    <ul>
      <li>Smile.io</li>
      <li>Yotpo Loyalty & Referrals</li>
      <li>Growave</li>
    </ul>
  </li>
  <li>Install the app → Configure settings:
    <ul>
      <li>Points for purchases, reviews, social shares</li>
      <li>Rewards (discounts, free products)</li>
      <li>Referral program: Unique link for each customer</li>
    </ul>
  </li>
</ol>

<h4>3️⃣ Practical Task: Promote Loyalty Program</h4>

<ol>
  <li>Display loyalty program banner on homepage</li>
  <li>Send email campaigns to encourage participation</li>
  <li>Track points earned, rewards redeemed, and referrals in the app dashboard</li>
</ol>

<h4>4️⃣ Tips for Day 20</h4>

<ul>
  <li>Keep rewards achievable and attractive</li>
  <li>Encourage referrals through email and social media</li>
  <li>Monitor program performance → Adjust rewards if needed</li>
  <li>Combine loyalty with seasonal promotions for higher engagement</li>
</ul>

<p><strong>✅ Day 20 Practical Goal:</strong></p>
<ul>
  <li>You can set up a loyalty program for repeat purchases</li>
  <li>You can implement a referral system to attract new customers</li>
  <li>You understand how retention strategies increase revenue</li>
</ul>  <p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=Jwc9dwFQvf8" target="_blank">Shopify Email Marketing for Noobs (But it's free)</a></p>
    <p><strong>Description:</strong> Learn to create free email campaigns, write engaging content, track performance, and boost sales using Shopify’s built-in marketing tools.</p>
  `,
    21: `<h3>Day 21 – Mid-Project Practice</h3>

<p><strong>Goal:</strong> Build a complete mini Shopify store to practice adding products, marketing, SEO, and promotions.</p>

<h4>1️⃣ Practical Task: Set Up Mini Store</h4>

<ol>
  <li><strong>Step 1: Add Products</strong>
    <ul>
      <li>Add 5–10 sample products with:
        <ul>
          <li>Title, Description, Images, Price, Variants, SKU</li>
        </ul>
      </li>
      <li>Assign products to collections (e.g., Men, Women, Sale)</li>
    </ul>
  </li>

  <li><strong>Step 2: Customize Homepage</strong>
    <ul>
      <li>Add:
        <ul>
          <li>Slideshow / Banner</li>
          <li>Featured Products / Collections</li>
          <li>Testimonials / About Us snippet</li>
        </ul>
      </li>
    </ul>
  </li>

  <li><strong>Step 3: Set Up Discounts & Promotions</strong>
    <ul>
      <li>Create a discount code and an automatic discount</li>
      <li>Display limited-time offers on banners</li>
    </ul>
  </li>

  <li><strong>Step 4: Integrate Apps</strong>
    <ul>
      <li>Product Reviews (Loox, Judge.me)</li>
      <li>Upsell / Cross-sell apps</li>
      <li>Abandoned Cart Recovery emails</li>
      <li>Loyalty / Referral program</li>
    </ul>
  </li>

  <li><strong>Step 5: SEO Optimization</strong>
    <ul>
      <li>Optimize:
        <ul>
          <li>Product titles, descriptions, URLs</li>
          <li>Meta titles & descriptions</li>
          <li>Alt text for images</li>
        </ul>
      </li>
    </ul>
  </li>

  <li><strong>Step 6: Test Sales Channels</strong>
    <ul>
      <li>Ensure products sync to:
        <ul>
          <li>Facebook & Instagram Shop</li>
          <li>Google Shopping</li>
        </ul>
      </li>
    </ul>
  </li>
</ol>

<h4>2️⃣ Tips for Day 21</h4>

<ul>
  <li>Treat this as a mini project for your portfolio</li>
  <li>Focus on end-to-end workflow: product → promotion → sale → fulfillment</li>
  <li>Test all features as a customer would</li>
  <li>Document the workflow in screenshots or notes for reference</li>
</ul>

<p><strong>✅ Day 21 Practical Goal:</strong></p>
<ul>
  <li>You can create a fully functional mini Shopify store</li>
  <li>You can apply all marketing, SEO, and automation skills learned so far</li>
  <li>You gain confidence in real-world store management</li>
</ul><p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=nJMqRgKkkBg" target="_blank">Shopify Tutorials | Build Your Store, Manage Products & More!</a></p>
    <p><strong>Description:</strong> Use this playlist to practice and reinforce the skills you've learned so far.</p>
  `, 22: `<h3>Day 22 – Technical Maintenance</h3>

<p><strong>Goal:</strong> Maintain a healthy store by performing regular technical upkeep.</p>

<h4>1️⃣ Theory: Why Technical Maintenance Matters</h4>

<ul>
  <li>Ensures store functionality and security</li>
  <li>Prevents compatibility issues with apps or themes</li>
  <li>Protects against data loss</li>
  <li>Keeps customers’ experience smooth</li>
</ul>

<p><strong>Key Maintenance Areas:</strong></p>
<ul>
  <li><strong>Theme Updates:</strong> New features, bug fixes, security patches</li>
  <li><strong>App Updates:</strong> Ensure apps work correctly and avoid conflicts</li>
  <li><strong>Backup Store Data:</strong> Products, orders, customer info</li>
  <li><strong>Performance Checks:</strong> Site speed, mobile responsiveness</li>
</ul>

<h4>2️⃣ Practical Task: Update Themes</h4>

<ol>
  <li>Go to <strong>Online Store → Themes → Customize</strong></li>
  <li>Check for theme updates → Update if available</li>
  <li>Test all pages and features after update</li>
  <li>Note any custom code changes to reapply if needed</li>
</ol>

<h4>3️⃣ Practical Task: Update Apps</h4>

<ol>
  <li>Go to <strong>Apps → Installed Apps</strong></li>
  <li>Check update notifications for each app</li>
  <li>Update apps one by one → Test functionality after update</li>
</ol>

<h4>4️⃣ Practical Task: Backup Store Data</h4>

<p>Shopify doesn’t have full native backup → Use apps like:</p>
<ul>
  <li>Rewind Backups</li>
  <li>BackupMaster</li>
</ul>

<p><strong>Backup:</strong></p>
<ul>
  <li>Products</li>
  <li>Orders</li>
  <li>Customers</li>
  <li>Themes</li>
</ul>

<p>Store backup files securely offline or in cloud</p>

<h4>5️⃣ Tips for Day 22</h4>

<ul>
  <li>Schedule weekly checks for updates</li>
  <li>Test checkout and product pages after updates</li>
  <li>Keep a version history of theme customizations</li>
  <li>Document backup procedures and restore points</li>
</ul>

<p><strong>✅ Day 22 Practical Goal:</strong></p>
<ul>
  <li>You can update themes and apps safely</li>
  <li>You can backup store data to prevent data loss</li>
  <li>You understand the importance of technical maintenance for a smooth-running store</li>
</ul><p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=nJMqRgKkkBg" target="_blank">Shopify Tutorials | Build Your Store, Manage Products & More!</a></p>
    <p><strong>Description:</strong> A range of tutorials to help you maintain and troubleshoot your Shopify store effectively.</p>
 `, 23: `<h3>Day 23 – Customer Service Skills</h3>

<p><strong>Goal:</strong> Provide excellent support to customers, ensuring satisfaction and loyalty.</p>

<h4>1️⃣ Theory: Why Customer Service Matters</h4>

<ul>
  <li>Good service builds trust and encourages repeat purchases</li>
  <li>Poor service can lead to negative reviews and lost customers</li>
</ul>

<p><strong>Key aspects:</strong></p>
<ul>
  <li>Responding promptly to queries</li>
  <li>Handling refunds and returns efficiently</li>
  <li>Resolving issues politely and professionally</li>
</ul>

<h4>2️⃣ Practical Task: Handling Queries</h4>

<ol>
  <li>Go to <strong>Customers → Messages / Shopify Inbox</strong></li>
  <li>Respond to customer queries such as:
    <ul>
      <li>Product availability</li>
      <li>Shipping status</li>
      <li>Payment questions</li>
    </ul>
  </li>
  <li>Use pre-written templates for FAQs to save time</li>
  <li>Always maintain a friendly and professional tone</li>
</ol>

<h4>3️⃣ Practical Task: Refunds & Returns</h4>

<ol>
  <li>Go to <strong>Orders → Select Order → Refund</strong></li>
  <li><strong>Steps to refund:</strong>
    <ul>
      <li>Select products to refund</li>
      <li>Choose refund method (full or partial)</li>
      <li>Notify customer automatically</li>
    </ul>
  </li>
  <li><strong>For returns:</strong>
    <ul>
      <li>Verify product condition</li>
      <li>Update inventory</li>
      <li>Process refund or replacement</li>
    </ul>
  </li>
</ol>

<h4>4️⃣ Tips for Day 23</h4>

<ul>
  <li>Respond to messages within 24 hours</li>
  <li>Keep a clear return and refund policy on your store</li>
  <li>Handle complaints calmly and professionally</li>
  <li>Document frequent issues to improve processes</li>
</ul>

<p><strong>✅ Day 23 Practical Goal:</strong></p>
<ul>
  <li>You can handle customer queries efficiently</li>
  <li>You can process refunds and returns correctly</li>
  <li>You understand how good customer service impacts loyalty and reputation</li>
</ul><p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=0-WXHJPlBrw" target="_blank">Shopify Tutorial - How To Manage Customer Accounts</a></p>
    <p><strong>Description:</strong> Enhance your customer service skills by learning how to manage customer accounts and interactions.</p>
 `, 24: `<h3>Day 24 – Multi-Currency & International Setup</h3>

<p><strong>Goal:</strong> Expand your store to international customers by offering multi-currency and multi-language options.</p>

<h4>1️⃣ Theory: Why Multi-Currency & International Setup Matters</h4>

<ul>
  <li>Enhances customer experience by showing prices in local currency</li>
  <li>Increases global sales by making checkout easier</li>
  <li>Supports different languages, catering to a wider audience</li>
  <li>Shopify has built-in Shopify Payments multi-currency support and apps for translations</li>
</ul>

<h4>2️⃣ Practical Task: Enable Multi-Currency</h4>

<ol>
  <li>Go to <strong>Settings → Payments → Shopify Payments → Manage → Multiple Currencies</strong></li>
  <li>Enable currencies you want to accept</li>
  <li>Test checkout process in different currencies</li>
  <li>Ensure taxes and shipping rates are adjusted per currency</li>
</ol>

<h4>3️⃣ Practical Task: Enable Multi-Language</h4>

<ol>
  <li>Go to <strong>Settings → Languages → Add Language</strong></li>
  <li>Translate:
    <ul>
      <li>Product titles and descriptions</li>
      <li>Collections and pages</li>
      <li>Checkout process</li>
    </ul>
  </li>
  <li>Use Shopify apps like:
    <ul>
      <li>Langify</li>
      <li>Weglot</li>
    </ul>
  </li>
  <li>Test the store in different languages</li>
</ol>

<h4>4️⃣ Tips for Day 24</h4>

<ul>
  <li>Focus on top international markets first</li>
  <li>Use professional translation for accuracy</li>
  <li>Display currency switcher clearly on the store</li>
  <li>Monitor analytics by region to track international performance</li>
</ul>

<p><strong>✅ Day 24 Practical Goal:</strong></p>
<ul>
  <li>You can enable multiple currencies and language options</li>
  <li>You can test and ensure checkout works for international customers</li>
  <li>You understand how international features increase global reach and sales</li>
</ul><p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=nJMqRgKkkBg" target="_blank">Shopify Tutorials | Build Your Store, Manage Products & More!</a></p>
    <p><strong>Description:</strong> Tutorials covering the setup of multi-currency and international features in your Shopify store.</p>
 `, 25: `<h3>Day 25 – Payment & Payouts</h3>

<p><strong>Goal:</strong> Understand Shopify payments, manage payouts, and maintain accurate financial records.</p>

<h4>1️⃣ Theory: Why Payment & Payout Management Matters</h4>

<ul>
  <li>Ensures smooth cash flow</li>
  <li>Helps reconcile orders, refunds, and fees</li>
  <li>Essential for tax filing and accounting</li>
</ul>

<p><strong>Shopify Payments and third-party gateways handle:</strong></p>
<ul>
  <li>Customer payments</li>
  <li>Store payouts</li>
  <li>Transaction fees</li>
</ul>

<p><strong>Key Concepts:</strong></p>
<ul>
  <li><strong>Payout Schedule:</strong> Frequency of transfers to your bank account</li>
  <li><strong>Transaction Fees:</strong> Charges by Shopify or payment gateway</li>
  <li><strong>Reconciliation:</strong> Matching sales and payouts with accounting records</li>
</ul>

<h4>2️⃣ Practical Task: Manage Payments</h4>

<ol>
  <li>Go to <strong>Settings → Payments</strong></li>
  <li>Check Shopify Payments or gateway status</li>
  <li>Test payment methods: Credit Card, UPI, PayPal, Wallets</li>
  <li>Ensure refunds and partial refunds process correctly</li>
</ol>

<h4>3️⃣ Practical Task: Track Payouts</h4>

<ol>
  <li>Go to <strong>Settings → Payments → View Payouts</strong></li>
  <li>Check details:
    <ul>
      <li>Amount</li>
      <li>Date</li>
      <li>Orders included</li>
      <li>Fees deducted</li>
    </ul>
  </li>
  <li>Export payout reports for accounting or taxes</li>
</ol>

<h4>4️⃣ Practical Task: Reconcile Payments</h4>

<ol>
  <li>Match payouts with orders in Shopify</li>
  <li>Ensure refunds and chargebacks are accounted for</li>
  <li>Maintain an Excel or accounting software record for tracking</li>
</ol>

<h4>5️⃣ Tips for Day 25</h4>

<ul>
  <li>Schedule weekly reconciliation for accuracy</li>
  <li>Keep track of payment fees to calculate net revenue</li>
  <li>Use reports for tax filing and financial planning</li>
  <li>Monitor failed or pending transactions to resolve quickly</li>
</ul>

<p><strong>✅ Day 25 Practical Goal:</strong></p>
<ul>
  <li>You can manage payments and payouts in Shopify</li>
  <li>You can reconcile store orders with bank transfers</li>
  <li>You understand how to maintain accurate financial records for taxes</li>
</ul><p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=nJMqRgKkkBg" target="_blank">Shopify Tutorials | Build Your Store, Manage Products & More!</a></p>
    <p><strong>Description:</strong> Learn about payment gateways, processing payouts, and managing finances within Shopify.</p>
`,
    26: `<h3>Day 26 – Automations</h3>

<p><strong>Goal:</strong> Automate tasks in Shopify to improve efficiency and consistency.</p>

<h4>1️⃣ Theory: Why Automations Matter</h4>

<ul>
  <li>Reduces manual work for repetitive tasks</li>
  <li>Minimizes errors in order management, tagging, and notifications</li>
  <li>Improves customer experience with timely actions</li>
</ul>

<p><strong>Shopify Flow (for Shopify Plus) and other apps allow:</strong></p>
<ul>
  <li>Customer tagging</li>
  <li>Order notifications</li>
  <li>Inventory updates</li>
  <li>Marketing triggers</li>
</ul>

<h4>2️⃣ Practical Task: Automate Customer Tagging</h4>

<ol>
  <li>Go to <strong>Apps → Shopify Flow</strong></li>
  <li>Create a new workflow:
    <ul>
      <li><strong>Trigger:</strong> Customer makes first purchase</li>
      <li><strong>Action:</strong> Tag customer as “New”</li>
      <li><strong>Optional:</strong> Send welcome email</li>
    </ul>
  </li>
  <li>Test workflow with a test customer</li>
</ol>

<h4>3️⃣ Practical Task: Automate Order Actions</h4>

<ol>
  <li>Create a workflow:
    <ul>
      <li><strong>Trigger:</strong> Order over ₹5000</li>
      <li><strong>Action:</strong> Tag order as “High Value”</li>
      <li><strong>Action:</strong> Notify sales manager via email</li>
    </ul>
  </li>
  <li>Test workflow with a sample order</li>
</ol>

<h4>4️⃣ Practical Task: Automate Marketing or Notifications</h4>

<ul>
  <li><strong>Example:</strong> Abandoned cart → Send discount email automatically</li>
  <li><strong>Example:</strong> New blog post → Notify customers via email or SMS</li>
  <li><strong>Example:</strong> Stock level low → Notify store manager automatically</li>
</ul>

<h4>5️⃣ Tips for Day 26</h4>

<ul>
  <li>Start with simple automations → Gradually add complex workflows</li>
  <li>Test all workflows thoroughly to avoid errors</li>
  <li>Document workflows for team use</li>
  <li>Regularly review and update automations as store needs change</li>
</ul>

<p><strong>✅ Day 26 Practical Goal:</strong></p>
<ul>
  <li>You can create basic automation workflows in Shopify</li>
  <li>You can tag customers, manage orders, and trigger notifications automatically</li>
  <li>You understand how automation saves time and improves efficiency</li>
</ul><p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=nJMqRgKkkBg" target="_blank">Shopify Tutorials | Build Your Store, Manage Products & More!</a></p>
    <p><strong>Description:</strong> Explore automation tools to streamline your store's operations and marketing efforts.</p>
`, 27: `<h3>Day 27 – Advanced Apps</h3>

<p><strong>Goal:</strong> Explore advanced Shopify apps to improve sales, engagement, and customer experience.</p>

<h4>1️⃣ Theory: Why Advanced Apps Matter</h4>

<ul>
  <li>Enhance customer experience beyond basic Shopify features</li>
  <li>Automate complex tasks like subscriptions and pre-orders</li>
  <li>Personalize store experience using AI recommendations</li>
  <li>Provide real-time support with chatbots</li>
</ul>

<p><strong>Common Advanced Apps:</strong></p>
<ul>
  <li><strong>Subscription apps:</strong> ReCharge, Bold Subscriptions</li>
  <li><strong>Pre-order apps:</strong> Pre-Order Manager, PreProduct</li>
  <li><strong>Chatbots / AI support:</strong> Tidio, Gorgias, Octane AI</li>
  <li><strong>AI Product Recommendations:</strong> LimeSpot, Recom.ai</li>
</ul>

<h4>2️⃣ Practical Task: Subscription & Pre-Order Apps</h4>

<ol>
  <li>Go to <strong>Shopify App Store → Search “Subscription / Pre-order”</strong></li>
  <li>Install an app like <strong>ReCharge</strong> or <strong>Bold Subscriptions</strong></li>
  <li>Configure:
    <ul>
      <li>Select products available for subscription or pre-order</li>
      <li>Set billing cycles and delivery schedules</li>
      <li>Test subscription checkout and pre-order flows</li>
    </ul>
  </li>
</ol>

<h4>3️⃣ Practical Task: Chatbot / AI Support</h4>

<ol>
  <li>Install a chatbot app (e.g., <strong>Tidio</strong>)</li>
  <li>Configure:
    <ul>
      <li>Welcome messages</li>
      <li>FAQs for customer queries</li>
      <li>Automated responses for common questions</li>
    </ul>
  </li>
  <li>Test chatbot behavior on desktop and mobile</li>
</ol>

<h4>4️⃣ Practical Task: AI Product Recommendations</h4>

<ol>
  <li>Install an AI recommendation app (e.g., <strong>LimeSpot</strong>, <strong>Recom.ai</strong>)</li>
  <li>Configure:
    <ul>
      <li>Recommend products based on customer behavior</li>
      <li>Display on product page, cart, or homepage</li>
      <li>Monitor conversion impact</li>
    </ul>
  </li>
</ol>

<h4>5️⃣ Tips for Day 27</h4>

<ul>
  <li>Focus on apps that improve sales or customer experience</li>
  <li>Test all features before going live</li>
  <li>Monitor app performance and ROI regularly</li>
  <li>Avoid too many apps → Can slow down store performance</li>
</ul>

<p><strong>✅ Day 27 Practical Goal:</strong></p>
<ul>
  <li>You can set up subscription, pre-order, chatbot, and AI recommendation apps</li>
  <li>You understand how advanced apps boost sales and engagement</li>
  <li>Your store can now offer personalized and automated experiences</li>
</ul> <p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=nJMqRgKkkBg" target="_blank">Shopify Tutorials | Build Your Store, Manage Products & More!</a></p>
    <p><strong>Description:</strong> Discover advanced apps that can enhance your store's functionality and customer experience.</p>
`, 28: `<h3>Day 28 – Full Simulation</h3>

<p><strong>Goal:</strong> Practice a complete end-to-end store management workflow.</p>

<h4>1️⃣ Workflow Step 1: Add Products</h4>
<ul>
  <li>Add 3–5 new products with:
    <ul>
      <li>Title, Description, Images, Price, Variants, SKU</li>
    </ul>
  </li>
  <li>Assign products to collections (manual or automatic)</li>
  <li>Optimize product pages for SEO</li>
</ul>

<h4>2️⃣ Workflow Step 2: Promote Products</h4>
<ul>
  <li>Set up discount codes or automatic discounts</li>
  <li>Enable upsell / cross-sell offers</li>
  <li>Share products on Facebook, Instagram, or Google Shopping</li>
  <li>Add email campaigns for promotions</li>
</ul>

<h4>3️⃣ Workflow Step 3: Customer Orders</h4>
<ul>
  <li>Simulate placing a customer order</li>
  <li>Ensure payment processing works correctly</li>
  <li>Test abandoned cart recovery emails if order is left incomplete</li>
</ul>

<h4>4️⃣ Workflow Step 4: Fulfillment</h4>
<ul>
  <li>Mark order as fulfilled</li>
  <li>Generate invoice and shipping label</li>
  <li>Update inventory levels</li>
</ul>

<h4>5️⃣ Workflow Step 5: Feedback & Reviews</h4>
<ul>
  <li>Send post-purchase email requesting product review</li>
  <li>Collect user-generated content like photos or testimonials</li>
  <li>Update loyalty points / referral rewards for customers</li>
</ul>

<h4>6️⃣ Tips for Day 28</h4>
<ul>
  <li>Treat this simulation as real-world practice</li>
  <li>Test all workflows as both admin and customer</li>
  <li>Check reports, analytics, and emails for accuracy</li>
  <li>Document any errors or improvements</li>
</ul>

<p><strong>✅ Day 28 Practical Goal:</strong></p>
<ul>
  <li>You can manage a complete Shopify workflow end-to-end</li>
  <li>You can add products, promote, process orders, fulfill, and collect feedback</li>
  <li>You are ready to handle real-world store operations confidently</li>
</ul> <p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=nJMqRgKkkBg" target="_blank">Shopify Tutorials | Build Your Store, Manage Products & More!</a></p>
    <p><strong>Description:</strong> Engage in a full simulation to apply all the skills you've learned in a real-world scenario.</p>
 `, 29: `<h3>Day 29 – Reporting</h3>

<p><strong>Goal:</strong> Use data to evaluate store performance and make informed business decisions.</p>

<h4>1️⃣ Theory: Why Reporting Matters</h4>

<ul>
  <li>Reports help measure sales, marketing, and customer performance</li>
  <li>Identify top-selling products, traffic sources, and underperforming items</li>
  <li>Track KPIs (Key Performance Indicators) to improve store strategy</li>
</ul>

<p><strong>Key KPIs to Track:</strong></p>
<ul>
  <li><strong>Sales Metrics:</strong> Revenue, orders, average order value</li>
  <li><strong>Customer Metrics:</strong> New vs returning customers, lifetime value</li>
  <li><strong>Product Metrics:</strong> Best-sellers, low-performing products</li>
  <li><strong>Marketing Metrics:</strong> Conversion rates, abandoned cart recovery, email campaign performance</li>
</ul>

<h4>2️⃣ Practical Task: Shopify Reports</h4>

<ol>
  <li>Go to <strong>Analytics → Reports</strong></li>
  <li>Generate:
    <ul>
      <li><strong>Sales report:</strong> Revenue per week, month</li>
      <li><strong>Customer report:</strong> New vs returning, location</li>
      <li><strong>Product report:</strong> Top-selling, low-selling products</li>
    </ul>
  </li>
  <li>Export reports as Excel or CSV for record-keeping</li>
</ol>

<h4>3️⃣ Practical Task: Create KPI Dashboard</h4>

<ol>
  <li>Use Excel or Google Sheets to track:
    <ul>
      <li>Weekly sales trends</li>
      <li>Conversion rate</li>
      <li>Abandoned cart recovery</li>
      <li>Loyalty program points redeemed</li>
    </ul>
  </li>
  <li>Update weekly to monitor performance</li>
</ol>

<h4>4️⃣ Tips for Day 29</h4>

<ul>
  <li>Track weekly, monthly, and quarterly KPIs</li>
  <li>Compare actual performance vs targets</li>
  <li>Use data to optimize promotions, inventory, and marketing campaigns</li>
  <li>Visualize data using charts and graphs for easy understanding</li>
</ul>

<p><strong>✅ Day 29 Practical Goal:</strong></p>
<ul>
  <li>You can generate Shopify reports and export them</li>
  <li>You can track KPIs to measure store performance</li>
  <li>You understand how data helps improve sales and marketing strategies</li>
</ul><p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=uUkIiWTe2aA" target="_blank">Shopify Analytics 2025 Full Tutorial - Understand Your Data</a></p>
    <p><strong>Description:</strong> Learn how to generate and interpret reports to assess your store's performance.</p>
 `, 30: `<h3>Day 30 – Final Review & Job Prep</h3>

<p><strong>Goal:</strong> Consolidate all your skills and create a structured workflow for managing a Shopify store efficiently.</p>

<h4>1️⃣ Revision of Key Modules</h4>

<ul>
  <li><strong>Products & Collections:</strong> Add, edit, organize, and manage inventory</li>
  <li><strong>Orders & Fulfillment:</strong> Process orders, print invoices, manage returns</li>
  <li><strong>Customers & Marketing:</strong> Segmentation, loyalty programs, referral programs</li>
  <li><strong>Discounts & Promotions:</strong> Coupons, automatic discounts, limited-time offers</li>
  <li><strong>Apps & Automations:</strong> Reviews, upsell, cross-sell, subscription, pre-orders, chatbots, AI recommendations, Shopify Flow</li>
  <li><strong>Analytics & Reporting:</strong> Shopify reports, Google Analytics, KPIs tracking</li>
  <li><strong>SEO & Content:</strong> Optimize product pages, blogs, meta tags, alt text</li>
  <li><strong>Technical Maintenance:</strong> Update themes and apps, backup store data</li>
  <li><strong>Customer Service:</strong> Handle queries, refunds, returns professionally</li>
  <li><strong>Internationalization:</strong> Multi-currency and multi-language setup</li>
  <li><strong>Payments & Payouts:</strong> Track payouts, reconcile accounts, export reports</li>
</ul>

<h4>2️⃣ Practical Task: Create Daily / Weekly / Monthly Checklist</h4>

<p><strong>Daily Tasks:</strong></p>
<ul>
  <li>Check new orders, process fulfillment</li>
  <li>Respond to customer messages</li>
  <li>Monitor website for errors</li>
  <li>Check inventory levels</li>
</ul>

<p><strong>Weekly Tasks:</strong></p>
<ul>
  <li>Review abandoned cart recovery and sales performance</li>
  <li>Update promotions or discounts</li>
  <li>Check app updates and workflow automation</li>
  <li>Monitor top-selling and low-selling products</li>
</ul>

<p><strong>Monthly Tasks:</strong></p>
<ul>
  <li>Reconcile payments and payouts</li>
  <li>Export monthly sales and KPI reports</li>
  <li>Review marketing campaign performance</li>
  <li>Evaluate customer loyalty and referral program results</li>
  <li>Backup store data and test theme/app updates</li>
</ul>

<h4>3️⃣ Tips for Day 30</h4>

<ul>
  <li>Maintain organized records of products, orders, and customers</li>
  <li>Always prioritize customer satisfaction</li>
  <li>Use analytics to drive decisions</li>
  <li>Continuously optimize store processes and update workflows</li>
</ul>

<p><strong>✅ Day 30 Practical Goal:</strong></p>
<ul>
  <li>You can fully manage a Shopify store independently</li>
  <li>You have a ready-to-use daily, weekly, and monthly task checklist</li>
  <li>You are job-ready for Shopify store management</li>
</ul><p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=nJMqRgKkkBg" target="_blank">Shopify Tutorials | Build Your Store, Manage Products & More!</a></p>
    <p><strong>Description:</strong> Review all topics and prepare for your new role by revisiting key concepts and practices.</p>
`
};

// ======================
// FUNCTION TO DISPLAY DAY
// ======================




let isDayVisible = false;
let currentDay = null;

function showDay(dayNumber) {
    const dayTitle = document.getElementById("dayTitle");
    const dayText = document.getElementById("dayText");
    const backBtn = document.getElementById("backBtn");

    if (!dayTitle || !dayText || !backBtn) return;

    const content = courseData[dayNumber];

    if (content) {
        // Always show the requested day
        dayTitle.innerHTML = `Day ${dayNumber}: Learning Module`;
        dayText.innerHTML = content;
        isDayVisible = true;
        currentDay = dayNumber;

        // Show Back button
        backBtn.hidden = false;

        // Optional: scroll to content
        document.getElementById("day-content")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function backToDays() {
    const dayTitle = document.getElementById("dayTitle");
    const dayText = document.getElementById("dayText");
    const backBtn = document.getElementById("backBtn");

    if (!dayTitle || !dayText || !backBtn) return;

    // Reset to default
    dayTitle.innerHTML = "Select a day to see details";
    dayText.innerHTML = "";
    backBtn.hidden = true;

    isDayVisible = false;
    currentDay = null;

    // Optional: scroll back to days list
    document.querySelector(".buttons-container")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

// When user clicks "view day content"
document.getElementById('day-btn').addEventListener('click', function() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('day-content').style.display = 'block';
    // Add history entry
    history.pushState({page: 'day'}, '', '#day1');
});

// Handle browser back button
window.addEventListener('popstate', function(event) {
    if (location.hash === '#day1') {
        document.getElementById('home').style.display = 'none';
        document.getElementById('day-content').style.display = 'block';
    } else {
        document.getElementById('home').style.display = 'block';
        document.getElementById('day-content').style.display = 'none';
    }
});




