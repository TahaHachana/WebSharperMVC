module Website.Skin

open System.Web
open IntelliFactory.WebSharper.Sitelets

type Page =
    {
        Title           : string
        MetaDescription : string
        Body            : Content.HtmlElement
    }

    static member Make title metaDescription makeBody context =
        {
            Title           = title
            MetaDescription = metaDescription
            Body            = makeBody context
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
    |> fun x ->
        x.With("title"           , fun x -> x.Title)
         .With("meta-description", fun x -> x.MetaDescription)
         .With("body"            , fun x -> x.Body)

let withTemplate<'T> template title metaDescription makeBody : Content<'T> =
    Content.WithTemplate
        template
        <| fun context -> Page.Make title metaDescription makeBody context