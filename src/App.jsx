// Updated App.jsx with closer Figma-like styling based on your screenshots
import React, { useMemo, useState } from "react";
import { ShoppingCart, Trash2, CheckCircle2, Sparkles, Rocket, Package, Users, Palette, PlayCircle, Globe, Briefcase, Menu, X } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import bannerImg from "./assets/banner.png";
import packageIcon from "./assets/package.png";
//import playIcon from "./assets/play.png";
import rocketIcon from "./assets/rocket.png";
import userIcon from "./assets/user.png";
import designToolIcon from "./assets/design-tool.png";
import operationIcon from "./assets/operation.png";
import portfolioIcon from "./assets/portfolio.png";
import shoppingCartIcon from "./assets/shopping-cart.png";
import socialMediaIcon from "./assets/social-media.png";

const products = [
  {
    id: 1,
    name: "AI Writing Pro",
    description: "Generate blogs, emails, ads, and copy with AI-powered content tools.",
    price: 29,
    period: "monthly",
    tag: "Our Picks",
    tagType: "popular",
    features: ["Unlimited generations", "Grammar checker", "Export to PDF"],
    icon: packageIcon,
  },
  {
    id: 2,
    name: "Design Templates Pack",
    description: "Modern templates for resumes, social posts, presentations, and more.",
    price: 49,
    period: "one-time",
    tag: "Popular",
    tagType: "popular",
    features: ["300+ templates", "Canva/Figma ready", "Commercial use"],
    icon: designToolIcon,
  },
  {
    id: 3,
    name: "Premium Stock Assets",
    description: "Access icons, illustrations, UI kits, and stock visuals for projects.",
    price: 19,
    period: "monthly",
    tag: "New",
    tagType: "new",
    features: ["5k+ assets", "Weekly updates", "Commercial license"],
    icon: portfolioIcon,
  },
  {
    id: 4,
    name: "Automation Toolkit",
    description: "Boost workflows with automations, task templates, and productivity kits.",
    price: 79,
    period: "yearly",
    tag: "Featured",
    tagType: "featured",
    features: ["50+ workflows", "Zapier guides", "Priority support"],
    icon: operationIcon,
  },
  {
    id: 5,
    name: "Resume Builder Pro",
    description: "Create ATS-friendly resumes and portfolios in minutes.",
    price: 15,
    period: "monthly",
    tag: "Hot",
    tagType: "new",
    features: ["ATS templates", "1-click export", "Portfolio links"],
    icon: userIcon,
  },
  {
    id: 6,
    name: "Social Media Content Kit",
    description: "Ready-made post bundles, captions, and campaign templates.",
    price: 39,
    period: "monthly",
    tag: "Best Seller",
    tagType: "best seller",
    features: ["100+ posts", "Editable captions", "Reels hooks"],
    icon: socialMediaIcon,
  },
];

const tagClasses = {
  popular: "bg-amber-100 text-amber-700",
  new: "bg-green-100 text-green-700",
  featured: "bg-violet-100 text-violet-700",
  "best seller": "bg-pink-100 text-pink-700",
};

const navItems = ["Product", "Feature", "Pricing", "Testimonials", "FAQ"];

//const priceLabel = (price, period) => (period === "one-time" ? `$${price}` : `$${price}/${period}`);

export default function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [cart, setCart] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const total = useMemo(() => cart.reduce((sum, item) => sum + item.price, 0), [cart]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    toast.success(`${product.name} added to cart!`);
  };

  const removeFromCart = (index) => {
    const removed = cart[index];
    setCart((prev) => prev.filter((_, i) => i !== index));
    toast.info(`${removed.name} removed from cart`);
  };

  const checkout = () => {
    if (!cart.length) {
      toast.error("Your cart is empty!");
      return;
    }
    setCart([]);
    toast.success("Proceed to checkout successful!");
  };

  return (
    <div className="min-h-screen bg-[#f6f6f9] text-slate-800">
      <ToastContainer position="top-right" autoClose={1800} />

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-extrabold tracking-tight text-violet-600">DigiTools</h1>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="text-sm font-medium text-slate-600 transition hover:text-violet-600">
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button className="relative rounded-full p-2 transition hover:bg-slate-100" onClick={() => setActiveTab("cart")}>
              <ShoppingCart className="h-5 w-5 text-slate-700" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 text-[10px] font-bold text-white">
                {cart.length}
              </span>
            </button>
            <button className="text-sm font-medium text-slate-700">Login</button>
            <button className="rounded-full bg-violet-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700">
              Get Started
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item} href="#" className="text-sm font-medium text-slate-700">
                  {item}
                </a>
              ))}
              <button className="mt-2 rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white">Get Started</button>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2 lg:px-8">
          <div className="max-w-xl">
            <span className="inline-flex rounded-full bg-violet-100 px-4 py-1 text-xs font-semibold text-violet-700">
              New AI-Powered Marketplace
            </span>
            <h2 className="mt-5 text-2xl font-bold leading-tight text-slate-800 md:text-6xl">
              Supercharge Your <br className="hidden sm:block" /> Digital Workflow
            </h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-slate-500 md:text-lg">
              Discover premium digital tools, templates, and productivity assets designed to help you create faster and work smarter.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <button className="rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-700">
                Explore Products
              </button>
              <button className="rounded-full border border-violet-300 bg-white px-6 py-3 text-sm font-semibold text-violet-600 transition hover:bg-violet-50">
                View Demo
              </button>
            </div>
          </div>

          <div className="mx-auto flex justify-center lg:justify-end">
            <div className="overflow-hidden rounded-2xl">
              <img src={bannerImg} alt="Banner" className="w-full max-w-[320px] rounded-2xl object-cover sm:max-w-[380px] md:max-w-[430px] lg:max-w-[520px] xl:max-w-[580px] h-auto" />
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-violet-700 to-fuchsia-500">
          <div className="mx-auto grid max-w-7xl grid-cols-3 px-4 py-7 text-center text-white sm:px-6 lg:px-8">
            {[
              ["50K+", "Active Users"],
              ["200+", "Premium Tools"],
              ["4.9", "Rating"],
            ].map(([value, label], i) => (
              <div key={label} className={`px-2 ${i !== 2 ? "border-r border-white/20" : ""}`}>
                <p className="text-3xl font-extrabold md:text-4xl">{value}</p>
                <p className="mt-1 text-sm text-violet-100 md:text-base">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-extrabold text-slate-800">Premium Digital Tools</h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500 sm:text-base">
              Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
            </p>

            <div className="mt-6 inline-flex rounded-full bg-slate-100 p-1 shadow-inner">
              <button
                onClick={() => setActiveTab("products")}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
                  activeTab === "products" ? "bg-violet-600 text-white shadow" : "text-slate-600"
                }`}
              >
                Products
              </button>
              <button
                onClick={() => setActiveTab("cart")}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
                  activeTab === "cart" ? "bg-violet-600 text-white shadow" : "text-slate-600"
                }`}
              >
                Cart ({cart.length})
              </button>
            </div>
          </div>

          {activeTab === "products" ? (
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <div key={product.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-100">
                      <img src={product.icon} alt={product.name} className="h-7 w-7 object-contain" />
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tagClasses[product.tagType] || "bg-slate-100 text-slate-600"}`}>
                      {product.tag}
                    </span>
                  </div>

                  <h4 className="mt-5 text-xl font-bold text-slate-800">{product.name}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{product.description}</p>

                  <div className="mt-4">
                    <span className="text-3xl font-extrabold text-slate-800">${product.price}</span>
                    <span className="ml-1 text-sm text-slate-400">/{product.period}</span>
                  </div>

                  <ul className="mt-5 space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-violet-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => addToCart(product)}
                    className="mt-6 w-full rounded-full bg-violet-600 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
                  >
                    Buy Now
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h4 className="text-xl font-bold text-slate-800">Your Cart</h4>
              {!cart.length ? (
                <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
                  <img src={shoppingCartIcon} alt="Empty cart" className="mx-auto h-12 w-12 opacity-50" />
                  <p className="mt-4 text-slate-500">Your cart is empty. Add some premium tools!</p>
                </div>
              ) : (
                <>
                  <div className="mt-6 space-y-4">
                    {cart.map((item, index) => (
                      <div key={`${item.id}-${index}`} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                            <img src={item.icon} alt={item.name} className="h-6 w-6 object-contain" />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-800">{item.name}</p>
                            <p className="text-sm text-slate-500">${item.price}</p>
                          </div>
                        </div>
                        <button onClick={() => removeFromCart(index)} className="text-sm font-medium text-pink-500 hover:text-pink-600">
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5">
                    <span className="text-sm text-slate-500">Total</span>
                    <span className="text-2xl font-bold text-slate-800">${total}</span>
                  </div>

                  <button
                    onClick={checkout}
                    className="mt-5 w-full rounded-full bg-violet-600 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
                  >
                    Proceed To Checkout
                  </button>
                </>
              )}
            </div>
          )}
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border-2 border-dashed border-violet-300 bg-white px-6 py-10 text-center">
            <h3 className="text-3xl font-extrabold text-slate-800">Get Started In 3 Steps</h3>
            <p className="mt-3 text-slate-500">Start your journey with powerful digital tools in just a few clicks.</p>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { title: "Create Account", desc: "Sign up for free to access our best tools and resources.", icon: userIcon, step: "01" },
                { title: "Choose Products", desc: "Browse our premium collection and find the tools that fit your needs.", icon: packageIcon, step: "02" },
                { title: "Start Creating", desc: "Design faster and work smarter with our premium digital resources.", icon: rocketIcon, step: "03" },
              ].map((step) => (
                <div key={step.title} className="relative rounded-2xl border border-slate-200 bg-white p-8">
                  <span className="absolute right-5 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
                    {step.step}
                  </span>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-violet-100">
                    <img src={step.icon} alt={step.title} className="h-8 w-8 object-contain" />
                  </div>
                  <h4 className="mt-5 text-lg font-bold text-slate-800">{step.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-4xl font-extrabold text-slate-800">Simple, Transparent Pricing</h3>
            <p className="mx-auto mt-3 max-w-2xl text-slate-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {[
              { name: "Starter", price: "$0", period: "/month", desc: "Perfect for getting started", features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"], featured: false, cta: "Get Started Free" },
              { name: "Pro", price: "$29", period: "/month", desc: "Best for professionals", features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Cloud sync", "Advanced analytics"], featured: true, cta: "Start Free Trial" },
              { name: "Enterprise", price: "$99", period: "/month", desc: "For teams and businesses", features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee"], featured: false, cta: "Contact Sales" },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-7 shadow-sm ${
                  plan.featured
                    ? "border-violet-600 bg-gradient-to-br from-violet-700 to-fuchsia-500 text-white shadow-xl"
                    : "border-slate-200 bg-white"
                }`}
              >
                {plan.featured && (
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300 px-3 py-1 text-xs font-bold text-slate-900">
                    Most Popular
                  </span>
                )}
                <h4 className={`text-xl font-bold ${plan.featured ? "text-white" : "text-slate-800"}`}>{plan.name}</h4>
                <p className={`mt-2 text-sm ${plan.featured ? "text-violet-100" : "text-slate-500"}`}>{plan.desc}</p>
                <div className="mt-5">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className={`text-sm ${plan.featured ? "text-violet-100" : "text-slate-400"}`}>{plan.period}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className={`flex items-center gap-2 text-sm ${plan.featured ? "text-white" : "text-slate-600"}`}>
                      <CheckCircle2 className={`h-4 w-4 ${plan.featured ? "text-white" : "text-violet-500"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full rounded-full py-3 text-sm font-semibold transition ${
                    plan.featured ? "bg-white text-violet-700 hover:bg-violet-50" : "bg-violet-600 text-white hover:bg-violet-700"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-violet-700 to-fuchsia-500 py-20 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h3 className="text-4xl font-extrabold">Ready To Transform Your Workflow?</h3>
            <p className="mx-auto mt-4 max-w-2xl text-violet-100">
              Join thousands of professionals who are already using DigiTools to work smarter, not harder.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-violet-700 transition hover:bg-violet-50">
                Explore Products
              </button>
              <button className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                View Pricing
              </button>
            </div>
            <p className="mt-6 text-sm text-violet-100">No setup fees • No hidden charges • Cancel anytime</p>
          </div>
        </section>
      </main>

      <footer className="bg-[#0b1220] text-slate-300">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <h4 className="text-4xl font-extrabold text-white">DigiTools</h4>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
              Premium digital tools for creators, entrepreneurs, and professionals. Work smarter with our suite of powerful assets.
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-white">Product</h5>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>All Tools</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-white">Company</h5>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-white">Resources</h5>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
          © 2026 DigiTools. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
