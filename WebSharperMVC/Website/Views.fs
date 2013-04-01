namespace Website

module Views =

    open IntelliFactory.Html
    open ExtSharper
    open Content
    open Model
    open Utils.Server

    let mainTemplate = Skin.MakeDefaultTemplate "~/Main.html" Skin.LoadFrequency.PerRequest
    let withMainTemplate = Skin.WithTemplate<Action> mainTemplate
    let loginInfo' = loginInfo Logout Login

    let home =
        withMainTemplate Home.title Home.metaDescription <| fun ctx ->
            [
                Div [Class "wrap"] -< [
                    Home.navigation
                    Div [new Forkme.Control()]
                    Div [Class "container"] -< [
                        loginInfo' ctx
                        Div [Class "pull-down"] -< [
                            Home.header
                            UL [Class "unstyled"] -< [
                                LI ["Sub 1" => (ctx.Link <| Sub 1)]
                                LI ["Sub 2" => (ctx.Link <| Sub 2)]
                                LI ["Sub 3" => (ctx.Link <| Sub 3)]
                            ]
                        ]
                    ]
                ]
                Shared.footer
            ]

    let about =
        withMainTemplate About.title About.metaDescription <| fun ctx ->
            [
                Div [Class "wrap"] -< [
                    About.navigation
                    Div [new Forkme.Control()]
                    Div [Class "container"] -< [
                        loginInfo' ctx
                        Div [Class "pull-down"] -< [
                            About.header
                        ]
                    ]
                ]
                Shared.footer
            ]

    let sub pageId =
        let pageId' = string pageId
        let title = "Sub Title " + pageId'
        let metaDescription = "Sub meta description " + pageId' + "."
        withMainTemplate title metaDescription <| fun ctx ->
            [
                Div [Class "wrap"] -< [
                    Shared.navigation
                    Div [new Forkme.Control()]
                    Div [Class "container"] -< [
                        loginInfo' ctx
                        Div [Class "pull-down"] -< [
                            Div [Text <| "Sub page " + pageId']
                        ]
                    ]
                ]
                Shared.footer
            ]

    let login (redirectAction: Action option) =
        withMainTemplate "Login" "" <| fun ctx ->
            let redirectLink =
                match redirectAction with
                | Some action -> action
                | None        -> Action.Admin
                |> ctx.Link
            [
                Div [Class "wrap"] -< [
                    Div [Class "container"] -< [
                        Shared.navigation
                        Div [Class "pull-down"] -< [
                            H1 [Text "Login"]
                            Div [new Login.Client.Control(redirectLink)]
                        ]
                    ]
                ]
                Shared.footer
            ]

    let admin =
        withMainTemplate "Admin" "" <| fun ctx ->
            [
                Div [Class "wrap"] -< [
                    Shared.navigation
                    Div [Class "container"] -< [
                        loginInfo' ctx
                        Div [Class "pull-down"] -< [
                            H1 [Text "Admin page"]
                        ]
                    ]
                ]
                Shared.footer
            ]

    let custom404 =
        withMainTemplate "Error - Page Not Found" "" <| fun ctx ->
            [
                Div [Class "wrap"] -< [
                    Shared.navigation
                    Div [Class "container"] -< [
                        Div [Class "pull-down"] -< [
                            H2 [Text "Page Not Found"]
                            P [Text "The requested URL doesn't exist."]
                        ]
                    ]
                ]
                Shared.footer
            ]
