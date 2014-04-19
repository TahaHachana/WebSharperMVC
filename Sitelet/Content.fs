module Sitelet.Content

open IntelliFactory.Html
open IntelliFactory.WebSharper.Sitelets
open Sitelet.Nav

module Home =

    let subDiv (ctx:Context<_>) x =
        let xString = string x
        Div [Class "col-lg-4"] -< [
            H2 [Text "Heading"]
            P [Text <| "Sub page " + xString + "."]
            P [
                A [
                    Class "btn btn-primary"
                    HRef ("/sub/" + xString)
                ] -< [Text "View details »"]
            ]
        ]

    let nav ctx = navElt (Some "Home") ctx

    let body ctx : Content.HtmlElement =
        Div [Class "container"] -< [
            Div [Class "row"] -< [
                subDiv ctx 1
                subDiv ctx 2
                subDiv ctx 3
            ]
        ]

module About =

    let nav ctx = navElt (Some "About") ctx

    let body ctx =            
        Div [Class "container"] -< [
            Div [Class "page-header"] -< [
                H1 [Text "About page header"]
            ]
        ]

module Sub =

    let nav ctx = navElt None ctx

    let body ctx pageId =
        Div [Class "container"] -< [
            Div [Class "page-header"] -< [
                H1 [Text <| "Sub Page " + pageId + " header"]
            ]
        ]

module Login =

    let nav ctx = navElt (Some "Home") ctx

    let body action action' ctx =
        let link =
            match action with
            | Some action -> action
            | None -> action'
            |> ctx.Link
        Div [Id "wrap"] -< [
            navElt None ctx
            Div [Class "container"; Id "main"] -< [
                Div [new Login.Control(link)]
            ]
        ]

module Admin =

    let nav ctx = navElt (Some "Home") ctx

    let body ctx =
        Div [Id "wrap"] -< [
            navElt None ctx
            Div [Class "container"; Id "main"] -< [
                Div [Class "page-header"] -< [
                    H1 [Text "Admin Page"]
                ]
            ]
            Div [Id "push"]
        ]

module Error =

    let nav ctx = navElt (Some "Home") ctx

    let body ctx =
        Div [Id "wrap"] -< [
            navElt None ctx
            Div [Class "container"; Id "main"] -< [
                Div [Class "page-header"] -< [
                    H1 [Text "Error"]
                    P [Text "The requested URL doesn't exist."]
                ]
            ]
            Div [Id "push"]
        ]