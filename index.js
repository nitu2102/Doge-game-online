// --- JS Animations extracted by Code Alchemist Studio ---

// END BLOCK



// this dict is available under PyConfig.config from __main__

config = {
    xtermjs : "1" ,
    _sdl2 : "canvas",
    user_canvas : 1,
    user_canvas_managed : 0,
    ume_block : 1,
    can_close : 0,
    archive : "doge-main",
    gui_debug : 3,
    cdn : "https://pygame-web.github.io/archives/0.6/",
    autorun : 0,
    PYBUILD : "3.11"
}




    async function custom_onload(debug_hidden) {
        // this is called before anythinh python is loaded
        // make your js customization here
        console.log(__FILE__, "custom_onload")

        pyconsole.hidden = debug_hidden
        system.hidden = debug_hidden
        transfer.hidden = debug_hidden
        info.hidden = debug_hidden
        box.hidden =  debug_hidden
    }

    function custom_prerun(){
        // no python main and no (MEMFS + VFS) yet.
        console.log(__FILE__, "custom_prerun")

    }

    function custom_postrun(){
        // python main and no VFS filesystem yet.
        console.log(__FILE__, "custom_postrun")

    }

    function debug() {
        // allow to gain access to dev tools from js console
        // but only on desktop. difficult to reach when in iframe
        python.config.debug = true
        custom_onload(false)
        Module.PyRun_SimpleString("shell.uptime()")
        window_resize()
    }

    function info_inline(data){
        document.getElementById("info").innerHTML = data
    }

    function info_online(url) {
        // display info about current APK
        fetch( url /*, options */)
            .then((response) => response.text())
            .then((html) => {
                info_inline(html);
        })
        .catch((error) => {
            console.warn(error);
        });
    }

    function frame_online(url) {
        window.frames["iframe"].location = url;
    }

    

// --- End of distilled JS magic ---