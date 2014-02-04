module Sitelet.Site

open IntelliFactory.WebSharper.Sitelets
open Model
open Controller

let router : Router<Action> =
    Router.Table [
        About, "/about"
        Admin, "/admin"
        Error, "/error"
        Home, "/"
        Login None, "/login"
        Logout, "/logout"
    ] <|> Router.Infer()

let sitelet =
    {
        Controller = controller
        Router = router
    }
    
type Website() =
    interface IWebsite<Action> with
        member this.Sitelet = sitelet
        member this.Actions = []

[<assembly: WebsiteAttribute(typeof<Website>)>]
do ()