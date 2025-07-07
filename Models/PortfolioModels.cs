namespace Portfolio.Models;

public class PortfolioViewModel
{
    public List<Project> Projects { get; set; } = new();
    public List<SocialLink> SocialLinks { get; set; } = new();
    public ContactInfo ContactInfo { get; set; } = new();
    public List<Article> Articles { get; set; } = new();
}

public class Project
{
    public string Id { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<string> Technologies { get; set; } = new();
    public List<string>? Features { get; set; }
    public string? GithubUrl { get; set; }
    public string? LiveUrl { get; set; }
    public bool IsEnhanced { get; set; }
}

public class SocialLink
{
    public string Platform { get; set; } = string.Empty;
    public string Url { get; set; } = string.Empty;
    public string Icon { get; set; } = string.Empty;
}

public class ContactInfo
{
    public string Email { get; set; } = string.Empty;
    public string LinkedIn { get; set; } = string.Empty;
    public string GitHub { get; set; } = string.Empty;
    public string WhatsApp { get; set; } = string.Empty;
}

public class Article
{
    public string Id { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Excerpt { get; set; } = string.Empty;
    public string FullContent { get; set; }
    public string Date { get; set; } = string.Empty;
    public string ReadTime { get; set; } = string.Empty;
    public List<string> Tags { get; set; } = new();
    public string Url { get; set; } = string.Empty;
}

public class ErrorViewModel
{
    public string? RequestId { get; set; }
    public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
}