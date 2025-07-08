using Microsoft.AspNetCore.Mvc;
using Portfolio.Models;
using System.Diagnostics;

namespace Portfolio.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        var model = new PortfolioViewModel
        {
            Projects = GetProjects(),
            SocialLinks = GetSocialLinks(),
            ContactInfo = GetContactInfo(),
            Articles = GetArticles()
        };
        return View(model);
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }

    private List<Project> GetProjects()
    {
        return new List<Project>
        {
            new Project
        {
            Id = "ugrolife",
            Title = "UGroLife - Microgreens E-commerce Platform",
            Description = "Full-stack e-commerce platform for microgreens with user authentication, cart management, payment integration, and automated customer communication.",
            Technologies = new List<string> { ".NET Core MVC", "MySQL", "Razorpay", "Bootstrap", "JavaScript", "Email OTP" },
            IsEnhanced = true,
            Features = new List<string>
            {
                "User Registration & Login with Email OTP Verification",
                "Product Catalog with Microgreens Inventory Management",
                "Shopping Cart with Add/Remove/Update Functionality",
                "Secure Payment Integration with Razorpay Gateway",
                "Contact Form with Automated Email Responses",
                "Order Management System with Status Tracking",
                "Responsive Design for Mobile and Desktop",
                "Admin Panel for Product and Order Management",
                "MySQL Database with Entity Framework Core",
                "Deployed on SmartASP.NET hosting platform"
            },
            GithubUrl = "https://github.com/venkiVP444/ugrolife",
            LiveUrl = "https://www.smarterasp.net/"
            },
            new Project
            {
                Id = "billsplit",
                Title = "BillSplit",
                Description = "A modern Android app for managing shared expenses using Flutter.",
                Technologies = new List<string> { "Flutter", "Dart", "Firebase", "Cloud Firestore" },
                IsEnhanced = true,
                Features = new List<string>
                {
                    "Login, Signup, Logout with Firebase Authentication",
                    "Create Groups and Add People for shared tracking",
                    "Store all expenses in Firebase Cloud Firestore",
                    "Add bills using text input and scanner",
                    "Visualize spending via Pie Chart (fl_chart)",
                    "Filter expenses by date range",
                    "Add custom categories for each expense",
                    "Smart settlement logic to show who owes whom"
                },
                GithubUrl = "https://github.com/venkiVP444/billsplit"
            },
            new Project
            {
                Id = "binance-trader-dashboard",
                Title = "Binance Live Trader Dashboard",
                Description = "A real-time desktop trading dashboard built with Avalonia UI, ReactiveUI, and WebSockets to stream live price data from Binance.",
                Technologies = new List<string> { "Avalonia UI", ".NET", "ReactiveUI", "WebSockets", "Binance API" },
                IsEnhanced = true,
                Features = new List<string>
                {
                    "Login Alert Notification",
                    "Live LTP (Last Traded Price) Streaming",
                    "Live Price Updates in Dashboard Window"
                },
                GithubUrl = "https://github.com/venkiVP444/binance-trader-dashboard-example",
                LiveUrl = null
            }
        };
    }



    private List<SocialLink> GetSocialLinks()
    {
        return new List<SocialLink>
        {
            new SocialLink { Platform = "GitHub", Url = "https://github.com/venkiVP444", Icon = "fab fa-github" },
            new SocialLink { Platform = "LinkedIn", Url = "https://www.linkedin.com/in/venkatesh-t-0953792a7/", Icon = "fab fa-linkedin" },
            new SocialLink { Platform = "Telegram", Url = "https://t.me/venkatesh", Icon = "fab fa-telegram" },
            new SocialLink { Platform = "Facebook", Url = "https://facebook.com/venkatesh", Icon = "fab fa-facebook" },
            new SocialLink { Platform = "Instagram", Url = "https://instagram.com/venkatesh", Icon = "fab fa-instagram" }
        };
    }

    private ContactInfo GetContactInfo()
    {
        return new ContactInfo
        {
            Email = "dev98venkatesh27@gmail.com",
            LinkedIn = "https://www.linkedin.com/in/venkatesh-t-0953792a7/",
            GitHub = "https://github.com/venkiVP444",
            WhatsApp = "https://wa.me/918072730437"
        };
    }

    private List<Article> GetArticles()
    {
        return new List<Article>
            {
                new Article
                {
                    Id = "1",
                    Title = "Building Scalable .NET Applications with Clean Architecture",
                    Excerpt = "Learn how to structure your .NET applications for maintainability and scalability using clean architecture principles.",
                    FullContent = @"
                        <p>Clean Architecture is a software design philosophy that separates the concerns of an application into distinct layers, ensuring that the core business logic remains independent of external frameworks, databases, and UI.</p>
                        <p>Key principles include:</p>
                        <ul>
                            <li><strong>Independence of Frameworks:</strong> The architecture doesn't depend on the existence of some library of feature-laden software.</li>
                            <li><strong>Testability:</strong> The business rules can be tested without the UI, Database, or any external element.</li>
                            <li><strong>Independence of UI:</strong> The UI can change easily, without changing the rest of the system.</li>
                            <li><strong>Independence of Database:</strong> You can swap out your database for a different one (e.g., SQL to NoSQL) without affecting other layers.</li>
                            <li><strong>Independence of any external agency:</strong> Your business rules simply don't know anything about the outside world.</li>
                        </ul>
                        <p>In a .NET application, this typically translates to projects like:</p>
                        <ol>
                            <li><strong>Domain:</strong> Contains entities, value objects, and business rules.</li>
                            <li><strong>Application:</strong> Defines interfaces for data access (ports) and implements use cases (interactors).</li>
                            <li><strong>Infrastructure:</strong> Implements the data access interfaces, integrates with databases, external services, etc.</li>
                            <li><strong>Presentation (e.g., Web UI):</strong> The entry point, responsible for user interaction and calling application use cases.</li>
                        </ol>
                        <p>By following these principles, you create applications that are more robust, easier to maintain, and adaptable to future changes.</p>
                    ", // <-- ADD DETAILED CONTENT HERE
                    Date = "Mar 15, 2024",
                    ReadTime = "8 min read",
                    Tags = new List<string> { ".NET", "Architecture", "Clean Code" },
                    Url = Url.Action("ArticleDetail", "Home", new { id = "1" }) 
                },
                new Article
                {
                    Id = "2",
                    Title = "Modern React Patterns for Better State Management",
                    Excerpt = "Explore advanced React patterns and hooks for managing complex application state effectively.",
                    FullContent = @"
                        <p>Effective state management is crucial for building maintainable and scalable React applications. While React's built-in `useState` and `useContext` hooks are powerful, as applications grow, more advanced patterns become necessary.</p>
                        <p>Some popular modern patterns include:</p>
                        <ul>
                            <li><strong>Context API with `useReducer`:</strong> For complex local state or global state that doesn't change frequently. `useReducer` provides a Redux-like experience without the boilerplate.</li>
                            <li><strong>Recoil/Jotai:</strong> Lightweight, atom-based state management libraries that offer a highly performant and intuitive way to manage shared state.</li>
                            <li><strong>Zustand:</strong> A small, fast, and scalable bear-necessities state-management solution using a simplified Flux-like pattern.</li>
                            <li><strong>React Query / SWR:</strong> Primarily for server-side state (data fetching, caching, synchronization). They handle loading, error, and stale data states automatically, significantly reducing boilerplate.</li>
                            <li><strong>Custom Hooks for Encapsulation:</strong> Encapsulate related stateful logic into reusable functions, promoting code reusability and separation of concerns.</li>
                        </ul>
                        <p>Choosing the right pattern depends on the complexity of your application, the frequency of state changes, and the need for server-side vs. client-side state management.</p>
                    ", // <-- ADD DETAILED CONTENT HERE
                    Date = "Feb 28, 2024",
                    ReadTime = "6 min read",
                    Tags = new List<string> { "React", "State Management", "Hooks" },
                    Url = Url.Action("ArticleDetail", "Home", new { id = "2" }) 
                },
                new Article
                {
                    Id = "3",
                    Title = "Optimizing Database Performance in Enterprise Applications",
                    Excerpt = "Best practices for database optimization, indexing strategies, and query performance tuning.",
                    FullContent = @"
                        <p>Database performance is often a critical bottleneck in enterprise applications. Optimizing it involves a multi-faceted approach, from schema design to query execution.</p>
                        <p>Key strategies for optimization include:</p>
                        <ul>
                            <li><strong>Proper Indexing:</strong> Create indexes on columns frequently used in `WHERE` clauses, `JOIN` conditions, `ORDER BY`, and `GROUP BY`. Be mindful of index overhead on writes.</li>
                            <li><strong>Query Optimization:</strong>
                                <ul>
                                    <li>Avoid `SELECT *`; only fetch necessary columns.</li>
                                    <li>Use `JOIN`s efficiently; understand `INNER`, `LEFT`, `RIGHT`, `FULL` joins.</li>
                                    <li>Minimize subqueries; often, `JOIN`s or CTEs (Common Table Expressions) are more performant.</li>
                                    <li>Use `EXPLAIN` (or database-specific tools like SQL Server Execution Plan) to analyze query performance.</li>
                                </ul>
                            </li>
                            <li><strong>Normalization vs. Denormalization:</strong> Understand when to break normal forms for performance (e.g., introducing controlled redundancy).</li>
                            <li><strong>Connection Pooling:</strong> Efficiently manage database connections to reduce overhead.</li>
                            <li><strong>Caching:</strong> Implement caching strategies at the application or database level (e.g., Redis, Memcached) for frequently accessed, slow-changing data.</li>
                            <li><strong>Sharding and Partitioning:</strong> For very large databases, consider distributing data across multiple servers (sharding) or logically dividing tables (partitioning).</li>
                            <li><strong>Regular Maintenance:</strong> Periodically rebuild/reorganize indexes, update statistics, and clean up old data.</li>
                        </ul>
                        <p>Continuous monitoring and profiling are essential to identify and address performance bottlenecks proactively.</p>
                    ", // <-- ADD DETAILED CONTENT HERE
                    Date = "Feb 10, 2024",
                    ReadTime = "12 min read",
                    Tags = new List<string> { "Database", "Performance", "SQL" },
                    Url = Url.Action("ArticleDetail", "Home", new { id = "3" }) // <--- DYNAMIC URL
                }
            };
    }
    public IActionResult ArticleDetail(string id)
    {
        var article = GetArticles().FirstOrDefault(a => a.Id == id);

        if (article == null)
        {
            return NotFound(); 
        }

        return View(article);
    }
}