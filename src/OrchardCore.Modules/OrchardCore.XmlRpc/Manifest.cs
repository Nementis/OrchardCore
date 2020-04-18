using OrchardCore.Modules.Manifest;

[assembly: Module(
    Name = "XML-RPC",
    Author = "The Orchard Team",
    Website = "https://orchardproject.net",
    Version = "2.0.0"
)]

[assembly: Feature(
    Id = "OrchardCore.XmlRpc",
    Name = "XML-RPC",
    Description = "The XML-RPC module enables creation of contents from client applications such as Open Live Writer.",
    Category = "Infrastructure"
)]

[assembly: Feature(
    Id = "OrchardCore.RemotePublishing",
    Name = "Remote Publishing",
    Description = "The remote publishing feature enables creation of contents from client applications such as Open Live Writer.",
    Dependencies = new[] { "OrchardCore.XmlRpc" },
    Category = "Infrastructure"
)]
