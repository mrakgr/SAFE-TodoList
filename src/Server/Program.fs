open System.IO
open System.Net
open Suave
open Shared
open Fable.Remoting.Server
open Fable.Remoting.Suave

// Is this right? The print statements do no work here so I can't check.
let clientPath = Path.Combine("..", "..", "public") |> Path.GetFullPath 
let port = 5000us

let config =
  { defaultConfig with 
      homeFolder = Some clientPath
      bindings = [ HttpBinding.create HTTP IPAddress.Loopback port ] }

let webApi = 
  let todoProtocol = WebApp.createUsingInMemoryStorage()
  WebApp.seedIntitialData(todoProtocol)
  Remoting.createApi()
  |> Remoting.fromValue todoProtocol
  |> Remoting.withRouteBuilder Route.builder
  |> Remoting.buildWebPart  

let webApp = choose  [ webApi; Files.browseHome ]
    
startWebServer config webApp