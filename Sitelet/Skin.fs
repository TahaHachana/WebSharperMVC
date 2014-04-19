module Sitelet.Skin

open IntelliFactory.WebSharper.Sitelets
open System.Web

type Page =
    {
        MetaDescription : string
        Title : string
        Nav : Content.HtmlElement
        Body : Content.HtmlElement
    }

    static member New metaDescription title makeNav makeBody context =
        {
            MetaDescription = metaDescription
            Title = title
            Nav = makeNav context
            Body = makeBody context
        }

let loadFrequency =
#if DEBUG
    Content.Template.PerRequest
#else
    Content.Template.Once
#endif

let makeTemplate<'T> path =
    let path' = HttpContext.Current.Server.MapPath path
    Content.Template<'T>(path', loadFrequency)
    
let makePageTemplate path =
    makeTemplate<Page> path
    |> fun template ->
        template
            .With("meta-description", fun page -> page.MetaDescription)
            .With("title" , fun page -> page.Title)
            .With("nav", fun page -> page.Nav)
            .With("body", fun page -> page.Body)

let withTemplate<'T> template metaDesc title makeNav makeBody : Content<'T> =
    Content.WithTemplate
        template
        (fun context -> Page.New metaDesc title makeNav makeBody context)