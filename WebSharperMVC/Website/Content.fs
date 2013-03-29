namespace Website

module Content =

    open IntelliFactory.WebSharper
    open IntelliFactory.Html
    open IntelliFactory.WebSharper.Sitelets
    open Utils.Server

    module Shared =
        
        let navigation : Content.HtmlElement = nav None

    module Home =
    
        let title = "Home Title"

        let metaDescription = "Home meta description."

        let navigation : Content.HtmlElement = nav <| Some "Home"

        let header : Content.HtmlElement =
            header
                "Home page header"
                "Short home page description"

    module About =
    
        let title = "About Title"

        let metaDescription = "About meta description."

        let navigation : Content.HtmlElement = nav <| Some "About"

        let header : Content.HtmlElement =
            header
                "About page header"
                "Short about page description"
