var builder = WebApplication.CreateBuilder(args);

// ✅ Get port from Render or fallback to 8080 for local testing
var port = Environment.GetEnvironmentVariable("PORT") ?? "8080";

// ✅ Configure Kestrel to bind to Render's port
builder.WebHost.ConfigureKestrel(options =>
{
    options.ListenAnyIP(int.Parse(port));
});

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();
// Health check: returns 200 OK immediately


// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

// Note: Optional. Comment this out if HTTPS breaks things on Render.
app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.MapGet("/healthz", () => Results.Ok("OK"));

app.Run();
