-- ==UserScript==
-- @name         autosave
-- @url          https://gist.github.com/Hakkin/5489e511bd6c8068a0fc09304c9c5a82
-- @downloadURL  https://github.com/mpv-easy/mpsm-scripts/releases/latest/download/autosave.lua
-- @description  Periodically saves "watch later" data during playback, rather than only saving on quit. Newer [fork](https://gist.github.com/CyberShadow/2f71a97fb85ed42146f6d9f522bc34ef).
-- @author       Hakkin
-- ==/UserScript==

-- autosave.lua
--
-- Periodically saves "watch later" data during playback, rather than only saving on quit.
-- This lets you easily recover your position in the case of an ungraceful shutdown of mpv (crash, power failure, etc.).
--
-- You can configure the save period by creating a "lua-settings" directory inside your mpv configuration directory.
-- Inside the "lua-settings" directory, create a file named "autosave.conf".
-- The save period can be set like so:
--
-- save_period=60
--
-- This will set the save period to once every 60 seconds of playback, time while paused is not counted towards the save period timer.
-- The default save period is 30 seconds.
local options = require 'mp.options'

local o = {
	save_period = 30
}

options.read_options(o)

local mp = require 'mp'

local function save()
	mp.command("write-watch-later-config")
end

local save_period_timer = mp.add_periodic_timer(o.save_period, save)

local function pause(name, paused)
	if paused then
		save_period_timer:stop()
	else
		save_period_timer:resume()
	end
end

mp.observe_property("pause", "bool", pause)