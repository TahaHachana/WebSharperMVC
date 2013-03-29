namespace Website

open IntelliFactory.WebSharper.Sitelets.Content

module Model =

    type PageId = int

    type Action =
        | [<CompiledName("about")>] About
        | [<CompiledName("admin")>] Admin
        | Home
        | [<CompiledName("login")>] Login of Action option
        | [<CompiledName("logout")>] Logout
        | [<CompiledName("sub")>] Sub of PageId

    type Page =
        {
            Title           : string
            MetaDescription : string
            Body            : HtmlElement list
        }