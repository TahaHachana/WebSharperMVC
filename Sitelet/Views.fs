module Sitelet.Views

open Sitelet.Content
open Sitelet.Model
open Sitelet.Skin

let home =
    withTemplate<Action>
        Templates.home
        "Home Meta Description"
        "Home Title"
        Home.nav
        Home.body

let about =
    withTemplate<Action>
        Templates.about
        "About Meta Description"
        "About Title"
        About.nav
        About.body

let sub pageId =
    let pageIdStr = string pageId
    withTemplate
        Templates.sub
        ("Sub Title " + pageIdStr)
        ("Sub meta description " + pageIdStr + ".")
        Home.nav
        <| fun ctx -> Sub.body ctx pageIdStr

let login (action:Action option) =
    withTemplate
        Templates.login
        "Login"
        ""
        Home.nav

        <| fun ctx -> Login.body action Action.Admin ctx

let admin =
    withTemplate<Action>
        Templates.admin
        "Admin"
        ""
        Home.nav
        Admin.body

let error =
    withTemplate<Action>
        Templates.error
        "Error - Page Not Found"
        ""
        Home.nav

        Error.body