# === BASE IMAGE (RUNTIME ONLY) ===
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

# === BUILD IMAGE (SDK) ===
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy the csproj directly from root
COPY ["Portfolio.csproj", "."]
RUN dotnet restore "Portfolio.csproj"

# Copy everything else
COPY . .
RUN dotnet build "Portfolio.csproj" -c Release -o /app/build

# === PUBLISH APP ===
FROM build AS publish
RUN dotnet publish "Portfolio.csproj" -c Release -o /app/publish

# === FINAL RUNTIME IMAGE ===
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Portfolio.dll"]
