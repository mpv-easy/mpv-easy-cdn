-- pitchcontrol.lua
--
-- Version: 0.2.0
-- URL: https://github.com/FichteFoll/mpv-scripts
-- License: ISC

-- Commands for key bindings:
--
-- * script-message-to pitchcontrol increase
--     Increase pitch by one semitone. Bound to Alt+p.
-- * script-message-to pitchcontrol decrease
--     Increase pitch by one semitone. Bound to Alt+P.
-- * script-message-to pitchcontrol toggle
--     Toggle pitching.
-- * script-message-to pitchcontrol set_semitone_pitch <number>
--     Sets pitch to <number> semitones relative to the original
--     (positive, negative or 0).


-- Copyright 2016-2024 FichteFoll
--
-- Permission to use, copy, modify, and/or distribute this software for any
-- purpose with or without fee is hereby granted, provided that the above
-- copyright notice and this permission notice appear in all copies.
--
-- THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
-- WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
-- MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
-- SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
-- WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
-- ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
-- IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.


local utils = require 'mp.utils'
local msg = require('mp.msg')
local options = require('mp.options')
local script_name = mp.get_script_name() -- "pitchcontrol"

local RUBBERBAND_LABEL = string.format("%s-rubberband", script_name)

local current_semitone = 0
local active = false


function set_semitone_pitch(rel_semitone, activate)
    if activate == nil then
        activate = true
    end
    rel_semitone = tonumber(rel_semitone)
    local pitch_scale = math.pow(2, rel_semitone/12)

    if active then
        mp.commandv('af-command', RUBBERBAND_LABEL, 'set-pitch', pitch_scale)
    elseif activate then
        mp.command(("af add @%s:rubberband=pitch-scale=%s"):format(RUBBERBAND_LABEL, pitch_scale))
        active = true
    else
        mp.osd_message(("'%s' is inactive"):format(script_name))
        return
    end

    current_semitone = rel_semitone

    -- output new rel_semitone
    msg.debug(("new pitch-scale: %f"):format(pitch_scale))
    mp.osd_message(("Pitch: %+d semitones"):format(rel_semitone))
end


function increase_handler()
    set_semitone_pitch(current_semitone + 1, false)
end


function decrease_handler()
    set_semitone_pitch(current_semitone - 1, false)
end


function toggle_handler()
    if active then
        mp.command(("af del @%s"):format(RUBBERBAND_LABEL))
        mp.osd_message(("'%s' deactivated"):format(script_name))
        active = false
    else
        set_semitone_pitch(current_semitone, true)
    end
end


mp.add_key_binding("Alt+p", 'increase', decrease_handler)
mp.add_key_binding("Alt+P", 'decrease', increase_handler)
mp.register_script_message('toggle', toggle_handler)
mp.register_script_message('set_semitone_pitch', set_semitone_pitch)
