module Website.Content

open IntelliFactory.Html
open IntelliFactory.WebSharper.Sitelets
open Nav

module Home =
    let jumbo =
        Div [Class "jumbotron"] -< [
            Div [Class "container text-center"] -< [
                H1 [Text "Jumbotron"]
                P [Text "Featured content or information."]
                P [
                    A [Class "btn btn-success btn-lg"] -< [
                        Text "Learn more"
                    ]
                ]
            ]
        ]

    let colDiv (ctx:Context<_>) x =
        Div [Class "col-lg-4"] -< [
            H2 [Text "Heading"]
            P [Text "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."]
            P [
                A [
                    Class "btn btn-primary"
                    HRef ("/sub/" + string x)
                ] -< [Text "View details »"]
            ]
        ]

    let body ctx =
        Div [Id "wrap"] -< [
            navElt (Some "Home") ctx
            Div [Class "container"; Id "main"] -< [
                jumbo
                HR []
                Div [Class "row"] -< [
                    colDiv ctx 1
                    colDiv ctx 2
                    colDiv ctx 3
                ]
            ]
            Div [Id "push"]
        ]

module About =
    let body ctx =
        Div [Id "wrap"] -< [
            navElt (Some "About") ctx
            Div [Class "container"; Id "main"] -< [
                Div [Class "page-header"] -< [
                    H1 [Text "About"]
                ]
            ]
            Div [Id "push"]
        ]

module Sub =
    let body ctx pageId =
        Div [Id "wrap"] -< [
            navElt None ctx
            Div [Class "container"; Id "main"] -< [
                Div [Class "page-header"] -< [
                    H1 [Text <| "Sub Page " + pageId]
                ]
            ]
            Div [Id "push"]
        ]

module Login =
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