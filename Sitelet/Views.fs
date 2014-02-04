module Sitelet.Views

open Sitelet.Content
open Sitelet.Model
open Sitelet.Skin

let home =
    withTemplate<Action>
        Templates.home
        "Home Title"
        "Home Meta Description"
        Home.body

let about =
    withTemplate<Action>
        Templates.home
        "About Title"
        "About Meta Description"
        About.body

let sub pageId =
    let pageIdStr = string pageId
    withTemplate
        Templates.sub
        ("Sub Title " + pageIdStr)
        ("Sub meta description " + pageIdStr + ".")
        <| fun ctx -> Sub.body ctx pageIdStr

let login (action:Action option) =
    withTemplate
        Templates.login
        "Login"
        ""
        <| fun ctx -> Login.body action Action.Admin ctx

let admin =
    withTemplate<Action>
        Templates.admin
        "Admin"
        ""
        Admin.body

let error =
    withTemplate<Action>
        Templates.error
        "Error - Page Not Found"
        ""
        Error.body