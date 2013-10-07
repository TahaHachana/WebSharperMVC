module Website.Site

open IntelliFactory.WebSharper.Sitelets
open Model
open Controller

let router : Router<Action> =
    Router.Table
        [
            Home      , "/"
            Login None, "/login"
            Logout    , "/logout"
            Error     , "/error"
            Admin     , "/admin"
            About     , "/about"
        ]
    <|>
    Router.Infer()

let Main =
    {
        Controller = controller
        Router     = router
    }
    
type Website() =
    interface IWebsite<Action> with
        member this.Sitelet = Main
        member this.Actions = []

[<assembly: WebsiteAttribute(typeof<Website>)>]
do ()