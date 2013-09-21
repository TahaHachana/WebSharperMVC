module Website.Views

open IntelliFactory.Html
open IntelliFactory.WebSharper.Sitelets
open ExtSharper
open Content
open Model
open Skin
open Nav

module private HomeUtils =
    let jumbo =
        Div [Class "jumbotron"] -< [
            Div [Class "container text-center"] -< [
                H1 [Text "Jumbotron"]
                P [Text "Featured content or information."]
                P [
                    A [Class "btn btn-success btn-lg"] -< [Text "Learn more"]
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
                    HRef (ctx.Link <| Sub x)
                ] -< [Text "View details »"]
            ]
        ]

    let body ctx =
        Div [Id "wrap"] -< [
            nav (Some "Home") ctx
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

let home =
    withTemplate
        Templates.home
        "Home Title"
        "Home Meta Description"
        (fun ctx -> HomeUtils.body ctx)

let about =
    withTemplate<Action>
        Templates.home
        "About Title"
        "About Meta Description"
        (fun ctx ->
            Div [Id "wrap"] -< [
                nav (Some "About") ctx
                Div [Class "container"; Id "main"] -< [
                    Div [Class "page-header"] -< [
                        H1 [Text "About"]
                    ]
                ]
                Div [Id "push"]
            ])

let sub pageId =
    let pageIdStr = string pageId
    withTemplate
        Templates.sub
        ("Sub Title " + pageIdStr)
        ("Sub meta description " + pageIdStr + ".")
        (fun ctx ->
            Div [Id "wrap"] -< [
                nav None ctx
                Div [Class "container"; Id "main"] -< [
                    Div [Class "page-header"] -< [
                        H1 [Text <| "Sub Page " + pageIdStr]
                    ]
                ]
                Div [Id "push"]
            ])

let login (redirectAction: Action option) =
    withTemplate
        Templates.login
        "Login"
        ""
        (fun ctx ->
            let redirectLink =
                match redirectAction with
                | Some action -> action
                | None        -> Action.Admin
                |> ctx.Link
            Div [Id "wrap"] -< [
                nav None ctx
                Div [Class "container"; Id "main"] -< [
                    Div [new Login.Control(redirectLink)]
                ]
            ])

let admin =
    withTemplate<Action>
        Templates.admin
        "Admin"
        ""
        (fun ctx ->
            Div [Id "wrap"] -< [
                nav None ctx
                Div [Class "container"; Id "main"] -< [
                    Div [Class "page-header"] -< [
                        H1 [Text "Admin Page"]
                    ]
                ]
                Div [Id "push"]
            ])

let error =
    withTemplate<Action>
        Templates.error
        "Error - Page Not Found"
        ""
        (fun ctx ->
            Div [Id "wrap"] -< [
                nav None ctx
                Div [Class "container"; Id "main"] -< [
                    Div [Class "page-header"] -< [
                        H1 [Text "Error"]
                        P [Text "The requested URL doesn't exist."]
                    ]
                ]
                Div [Id "push"]
            ])