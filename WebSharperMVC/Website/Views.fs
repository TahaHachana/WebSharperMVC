module Website.Views

open Content
open Model
open Skin

let home =
    withTemplate<Action>
        Templates.home
        "Home Title"
        "Home Meta Description"
        <| fun ctx -> Home.body ctx

let about =
    withTemplate<Action>
        Templates.home
        "About Title"
        "About Meta Description"
        <| fun ctx -> About.body ctx

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
        <| fun ctx -> Admin.body ctx

let error =
    withTemplate<Action>
        Templates.error
        "Error - Page Not Found"
        ""
        <| fun ctx -> Error.body ctx