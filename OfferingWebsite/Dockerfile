#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install --assume-yes nodejs

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install --assume-yes nodejs
WORKDIR /src
COPY ["OfferingWebsite/OfferingWebsite.csproj", "OfferingWebsite/"]
RUN dotnet restore "OfferingWebsite/OfferingWebsite.csproj"
COPY . .
WORKDIR "/src/OfferingWebsite"
RUN dotnet build "OfferingWebsite.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "OfferingWebsite.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "OfferingWebsite.dll"]