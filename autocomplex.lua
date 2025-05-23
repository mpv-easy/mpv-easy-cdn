----NO-WORD-WRAP FOR THIS SCRIPT.  UNACCEPTABLE PERFORMANCE ON CHEAP SMARTPHONE, BUT FINE IN BLUESTACKS (DIFFERENT ANDROID BUILDS). 
----lavfi-complex SCRIPT WHICH OVERLAYS STEREO FREQUENCY SPECTRUM + VOLUME BARS (AUDIO VISUALS) ONTO MP4, AVI, 3GP, MP3 (RAW & albumart), MP2, M4A, WAV, OGG, AC3, OPUS, WEBM & YOUTUBE. IT ALSO LOOPS albumart. 
----CAN USE DOUBLE-mute TO TOGGLE. ACCURATE 100Hz GRID (LEFT 1kHz TO RIGHT 1kHz). ARBITRARY sine_mix CAN BE ADDED FOR CALIBRATION. COMPLEX MOVES & ROTATES WITH TIME.  INSTEAD OF EVERY SCRIPT SETTING ITS OWN lavfi-complex, THEY MAY RELY ON THIS SCRIPT. EXAMPLE: automask.lua albumart ANIMATION.

options                 = {
    key_bindings        = 'F1' ,  --CASE SENSITIVE. THESE DON'T WORK INSIDE SMPLAYER.  C=CROP (autocrop.lua) & CTRL+C=CLOCK (aspeed.lua). ALT+C AVAILABLE.  RE-RANDOMIZES, BUT INTERRUPTS PLAYBACK.  DOESN'T TOGGLE af_chain!
    double_mute_timeout = 0    ,  --SECONDS FOR DOUBLE-MUTE-TOGGLE        (m&m DOUBLE-TAP).  SET TO .5 TO ENABLE.  IDEAL FOR SMPLAYER. 
    double_sid_timeout  = 0    ,  --SECONDS FOR DOUBLE-SUBTITLE-ID-TOGGLE (j&j DOUBLE-TAP).  SET TO .5 TO ENABLE.  BAD FOR YOUTUBE.  REQUIRES sid.
    toggle_command      = ''   ,  --EXECUTES on_toggle, UNLESS BLANK.  'show-text ""' CLEARS THE OSD.  CAN DISPLAY ${media-title} ${mpv-version} ${ffmpeg-version} ${libass-version} ${platform} ${current-ao} ${current-vo} ${osd-dimensions} ${af} ${vf} ${lavfi-complex} ${video-out-params}.
    vflip_only          = false,  --true TO REMOVE TOP HALF. ALSO REMOVE vflip_scale_h FOR NULL OVERRIDE (NO overlay).
    vflip_scale_h       = '.5' ,  --REMOVE FOR NO BOTTOM HALF.  A DIFFERENT VERSION COULD SUPPORT BL & BR CHANNELS FOR BOTTOM.
    period              = '.5' ,  --'SECONDS'.  SET TO 0 FOR STATIONARY (FORCES (np)=(0)).  UNLIKE A MASK, MOTION MAY NOT BE PERIODIC - COMPLEX FREE TO RANDOMLY FLOAT AROUND. IT ACTS LIKE A METRONOME.
    fps                 = 30   ,  --FRAMES PER SECOND FOR [vo].  30fps CAN USE 15% MORE CPU THAN 25fps.  SCRIPT ALSO LIMITS scale. 
    gsubs               = {np='((n)/(fpp))',c='cos(2*PI*(np))',s='sin(2*PI*(np))',m='mod(floor(np),2)',cos='(c)',sin='(s)',mod='(m)',t,n,on,random,},  --SUBSTITUTIONS.  ENCLOSING BRACKETS () ARE ADDED & REQUIRED, IN EFFECT.  SHIFT (n),(np)→((n)+?),((np)+?) TO SYNC WITH OTHER GRAPHS, BY TRIAL & ERROR.  (fpp)=(fps*period)=(FRAMES-PER-PERIOD) IS DERIVED & DEPENDS ON FILTER.  EXAMPLE: USE n=5 FOR STATIONARY COMPLEX.  (t),(n),(on)=(TIME),(FRAME#),(FRAMEOUT#)  (np)=(n AS RATIO TO PERIOD, +SHIFT)=("TIME" AS A RATIO).  (random) IS A RANDOM # BTWN 0 & 1, CHOSEN @file-loaded, @on_toggle & @RELOAD.  (fpp), LIKE fps, COULD ALSO BE NAMED (npp).  mod(m) ACTS AS ON/OFF SWITCH (SUPERPERIOD).  
    gsubs_passes        = 4    ,  --# OF SUCCESSIVE gsubs.  THEY DEPEND ON EACH OTHER, IN A DAIZY-CHAIN. LIKE (cos)→(c)→(np)→(fpp)  THEY DON'T APPLY TO filterchain.  THEY MAY HELP WITH MORE ADVANCED graph CHOREOGRAPHY.
    overlay_scale       = {.69 , .69},  --RATIOS {WIDTH<=1,HEIGHT<=1}. (number/string/nil).  SHRINKS THE COMPLEX.  IF zoompan USES RECIPROCAL PADDING.  LARGER SIZE REQUIRES SHARPER THAN 300x500 showfreqs, WHICH INCREASES CPU USAGE.
    filterchain         = 'shuffleplanes=1,lutrgb=g=val*.25:a=val*1',  --val*.5 TO HALVE alpha.  MIXES IN 25% GREEN-IN-BLUE RATIO, BECAUSE PURE BLUE IS TOO DARK.  PLANES ORDERED LIKE GreatBRitAin (gbrap). COULD BE RENAMED overlay_vf_chain.  SHUFFLE + DILUTION MUCH MORE EFFICIENT THAN colorchannelmixer (+10% CPU).  BLUE, DARKBLUE & BLACK ARE COMPATIBLE WITH cropdetect.  STRIPES IS A DIFFERENT DESIGN (RED/BLUE/WHITE).  COLOR-BLINDNESS COULD BE AN ISSUE.
    rotate              = 'enable=0:a=0:ow=iw:oh=ih'    ,  --RADIANS CLOCKWISE.  enable=0 FULLY DISABLES IT.  LARGE ANGLES REQUIRE OUTPUT-WIDTH:OUTPUT-HEIGHT TO PREVENT CLIPPING.
    zoompan             = ''                            ,  --MAY BE NEEDED TO SCOOT ALONG WITH OTHER GRAPH/S. 
    overlay             = 'x=(W-w)/2:y=(H-h)/2+W/2/4+1' ,  --+1 BY TRIAL & ERROR. +W/8 DOWNWARDS ANCHORS TO DUAL-EQUILATERAL TRIANGLES (CENTRIX @QUARTER).  ANOTHER IDEA IS TO POSITION ATOP BLACK BARS.
    -- RED_GREEN     ; filterchain = 'shuffleplanes=1:0,lutrgb=g=val*.7'  , --UNCOMMENT FOR RED & GREEN, INSTEAD OF RED & BLUE (DEFAULT). THIS EXAMPLE DROPS GREEN 30% BECAUSE IT'S TOO BRIGHT.
    -- GREEN_BLUE    ; filterchain = 'shuffleplanes=2:1:0              '  , 
    -- MOVING_EXAMPLE; rotate      = 'PI/60*(s)*(m)',  zoompan='1+.1*(1-(c))*(m)', overlay='(W-w)/2:y=(H-h)/2+W/8+1+H*.02*(1-(c))*(1-(m))',  --UNCOMMENT FOR EXAMPLE OF MOVING rotate, zoompan & overlay.  MOVES DOWN→UP→RIGHT→LEFT BY MODDING.  2 PERIODS/SUPERPERIOD WITH 10% ZOOM.  INCREASES CPU USAGE (OPT-IN).  PI/60=3°=180°/60.  zoompan CAN USE (np) PHASE OFFSET, (np2).  FOR CHEOREOGRAPHY CAN GUESS BTWN (s),(c),(1-(c)),(m),(1-(m)).
    dual_scale          = {nil,nil}                     ,  --RATIOS {WIDTH,HEIGHT}, (NUMBERS), RELATIVE TO display.  REPLACE nil WITH 1 FOR GREEN/RED DUAL.  THIS DUAL USES THE SAME aid.  BI-QUAD CONCEPT COMES FROM HOW RAW MP3 WORKS (SELF-overlay).
    dual_filterchain    = 'shuffleplanes=1:0      '     ,  --APPLIES AFTER PRIMARY filterchain, TO SWITCH BLUE/GREEN.  EXAMPLE: TO SEESAW IT, APPEND ',rotate=PI/60*(s):c=BLACK@0'  (BUT THAT ADDS TOO MUCH CPU USAGE.)
    dual_overlay        = 'x=(W-w)/2:y=(H-h)/2+H/4'     ,  --DUAL CAN FLY AROUND TOO.  IT COULD FLOAT TO VARIOUS INSTRUMENTS, VIOLINS ETC.  
    af_chain            = 'anull,dynaudnorm=g=3:p=1:m=1',  --AUDIO FILTERCHAIN FOR [ao]. CAN REPLACE anull WITH OTHER FILTERS, LIKE vibrato.  DYNAMIC AUDIO NORMALIZER BUFFERS OUTPUT, FIXING AN FFMPEG ERROR.  IT'S A NULL-OP & A DIFFERENT FILTER COULD ALSO WORK - DETERMINISTIC FOR 10 HRS.
    freqs_dynaudnorm    = 'g=5:p=1:m=100:b=1'           ,  --DEFAULT=g=31:p=.95:m=10:b=0  THIS IS THE THIRD PASS. AFTER RESAMPLING TO 2.1kHz, & SHIFTING freqs_lead_time.  SPECTRUM SHOULD BE CLEAR EVEN FOR THE FAINTEST SOUNDS.
    freqs_opts          = 's=300x500:mode=line:ascale=lin:win_size=512:win_func=parzen:averaging=2',  --EXTRA OPTIONS.  CAN ALSO SET overlap.  CAN'T CHANGE rate, fscale, colors & cmode (SEE graph SECTION).  INCREASE size FOR SHARPER CURVE (OR CHANGE ITS INTERNAL aspect).  mode={line,bar,dot}  win_func MAY ALSO BE poisson OR cauchy (PARZEN WAS AN AMERICAN STATISTICIAN).  win_size IS # OF DATA POINTS (LIKE TOO MANY PIANO KEYS).  FOR bar USE a=val*.25 IN filterchain.
    freqs_samplerate    = 2100*1   ,  --Hz.  *2 FOR 2kHz MAX (EACH BATON WORTH 200Hz EACH).  5% IS CROPPED OFF NYQUIST.  2100*3=6300 FOR 3kHz AT TENTH BATON, ETC.  CAN VERIFY WITH sine_mix.  
    freqs_lead_time     = '.1'     ,  --'+-SECONDS'.  LEAD TIME FOR SPECTRUM.  SUBJECTIVE TRIAL & ERROR: 0, .1 OR .2?  BACKDATES audio TIMESTAMPS. showfreqs HAS AT LEAST 2 FRAMES LAG.  A CONDUCTOR'S BATON MAY MOVE AN EXTRA .1s BEFORE THE ORCHESTRA, OR IT'S LIKE HE'S TRYING TO KEEP UP.
    freqs_fps           = 25/2     ,  --FOR PERFECTLY SMOOTH FILM ON CHEAP CPU.  MORE MAY CAUSE FILM TO STUTTER. freqs_clip_h ALSO IMPROVES PERFORMANCE.  USE MORE averaging FOR MORE freqs_fps.
    freqs_fps_albumart  = 25       ,  --FOR RAW MP3 ALSO. CAN EASILY DOUBLE freqs_fps.
    freqs_scale_h       = '1'      ,  --CURVE HEIGHT MAGNIFICATION.  REDUCES CPU CONSUMPTION (LESS DATA IN EFFECT). BUT THE LIPS LOSE TRACTION.  L & R CHANNELS FORM LIKE A DUAL MOUTH (LIKE HOW HUMANS ARE BIPEDAL).  freqs_alpha OPTION UNNECESSARY (EQUIVALENT TO A no_freqs OPTION).
    freqs_clip_h        = .2       ,  --MINIMUM=grid_height (CAN'T CLIP LOWER THAN grid, DUE TO RECIPROCAL CANVAS PADDING).  number NEEDED FOR scale COMPUTATIONS.  REDUCES CPU USAGE BY CLIPPING CURVE - CROPS THE TOP OFF SHARP SIGNAL.
    freqs_interpolation = false    ,  --INTERPOLATES FROM freqs_fps→volume_fps.  ADDS ~5% CPU USAGE.  COULD BE RENAMED freqs_fade.  NICE LIGHTNING EFFECT BUT LOOKS JITTERY.  CAN REDUCE freqs_fps_albumart, TO INTERPOLATE FROM IT.  
    volume_af_chain     = 'highpass=f=250,dynaudnorm=g=5:p=1:m=100:b=1',  --ALSO APPLIES TO freqs (volume GOES FIRST IN THIS MODEL).  250Hz highpass HELPS CLARIFY THE SPECTRUM.  firequalizer IS AN ALTERNATIVE.
    volume_opts         = 'f=0'    ,  --DEFAULT=1 FOR FADE.  CAN ALSO ENTER EXTRA OPTIONS, LIKE dm & dmc FOR DISPLAY-MAX-LINES.  EXAMPLE: "dm=1:dmc=RED"
    volume_scale        = {.04,.15},  --RATIOS {WIDTH,HEIGHT}, (number/string).  RELATIVE TO overlay_scale, BEFORE STACKING feet, & BEFORE autocrop.lua.
    volume_fps          = 25       ,  --PRIMARY ANIMATION fps. STREAM MAYBE 60fps BUT NOT THE EXTRA VISUALS.
    volume_alpha        = '.25'    ,  --0 REMOVES BARS (feet REMAIN). OPAQUENESS OF volume BARS.  DUAL volume TAKES CENTER STAGE.
    grid_alpha          = '.7'     ,  --MULTIPLIER   RELATIVE TO volume_alpha. 0 REMOVES grid & feet.  TRANSPARENCY IS A WAY OF WEAKENING STRONG COLORS.
    grid_thickness      = '1/8'    ,  --RATIO        RELATIVE TO grid SPACING.  ~CURVE-THICKNESS.
    grid_height         = '.1'     ,  --RATIO        RELATIVE TO display, BEFORE STACKING feet.  grid TICKS ARE LIKE volume BATONS, OR TEETH BRACES FOR THE LIPS.
    feet_height         = '.05'    ,  --RATIO>=.01   RELATIVE TO grid (BARS). 
    feet_activation     = '.5'     ,  --RATIO        RELATIVE TO volume, FROM THE BOTTOM.  feet BLINK ON/OFF WHEN volume PASSES THIS THRESHOLD.
    feet_lutrgb         = 'r=192:b=255:a=val*4', --a RELATIVE TO volume_alpha. *0 TO REMOVE feet.  COLOR OF CENTRAL feet.  A DIFFERENT VERSION COULD ALSO ADD o.grid_filterchain (BLUE/RED OR RED/BLUE BARS?) & o.grid_feet_lutrgb.  RED OUTER BARS SET OFF cropdetect. 
    shoe_color          = 'BLACK@.7', --@0 TO REMOVE.  
    sine_mix            = {}        , --{{'f:b',volume},{f,volume},...,{'frequency(Hz):beep_factor',volume}}  b OPTIONAL (ONCE/SECOND).  sine WAVES FOR CALIBRATION MIX DIRECTLY INTO [ao].  BEEP ACTIVATES feet.  FUTURE VERSION SHOULD SUPPORT JPEG (CURRENTLY REQUIRES EXISTING AUDIO TO MIX WITH).
    -- EXAMPLE;sine_mix = {{100,1},{'200:1',1.1},{300,1},{'400:1',1.1},{500,1},{'600:1',1.1},{700,1},{'800:1',1.1},{900,1},{'1000:1',1.1}},  --UNCOMMENT FOR 10 WAVES.  EVERY SECOND ONE BEEPS. THE 900Hz PEAK LINES UP, BUT THE SURROUNDING CURVE SKEWS ABOVE 900Hz.
    video_params        = {w,h,pixelformat},  --OVERRIDES {number/string}.  DEFAULT pixelformat='yuva420p'/'yuv420p', DEPENDING.  DEFAULT w=display-width.  BUT THAT'S nil FOR LINUX SMPLAYER (CAN SET {w=1680,h=1050}).
    options             = {
        'keepaspect      no','force-window yes','geometry 50%',  --no-keepaspect FOR ANDROID. FREE-SIZE IF MPV HAS ITS OWN WINDOW.  force-window PREVENTS MPV FROM VANISHING DURING TRACK CHANGES, & TOGGLING ON AUDIO.  geometry APPLIES ONCE, IF MPV HAS ITS OWN WINDOW.
        'vd-lavc-threads 0 ',  --VIDEO-DECODER-LIBRARY-AUDIO-VIDEO-threads OVERRIDES SMPLAYER OR ELSE MAY FAIL TESTING.  
    },
    windows       = {}, linux = {}, darwin = {},  --OPTIONAL platform OVERRIDES.
    android       = {
        overlay   = '(W-w)/2:(H-h)/2', freqs_fps_albumart = 25/2,  --LESS CPU USAGE FOR SMARTPHONE.
    },
}

o,p,m,timers           = {},{},{},{} --o,p=options,PROPERTIES.  m=MEMORY={graph,'android-surface-size'}.  timers={mute,sid,playback_restarted,seek}  playback_restarted BLOCKS THE PRIOR 2.
v,android_surface_size = {},{}       --v=current-tracks/video.  android_surface_size={w,h}.   
abs,max,min,random     = math.abs,math.max,math.min,math.random  --@pexpand, @file_loaded & @seek.
math.randomseed(os.time()+mp.get_time())  --os,mp=OPERATING-SYSTEM,MEDIA-PLAYER.  os.time()=INTEGER SECONDS FROM 1970.  mp.get_time()=μs IS MORE RANDOM THAN os.clock()=ms.  os.getenv('RANDOM')=nil

function round(N,D)  --@file_loaded & @on_toggle.  NUMBERS/STRINGS/nil.  FFMPEG SUPPORTS round, BUT NOT LUA.  ROUND NUMBER N TO NEAREST MULTIPLE OF DIVISOR D (OR 1).
    D = D or 1
    return N and math.floor(.5+N/D)*D  --round(N)=math.floor(.5+N)
end

function pexpand(arg)  --ALSO @pexpand_to_string & @show.  PROTECTED PROPERTY EXPANSION.  '${speed}+2'=3.  COULD BE RENAMED ppexpand.
    if type(arg)~='string' then return arg end
    pcode, pval  = pcall(loadstring('return '..mp.command_native({'expand-text',arg}))) --''→nil.  load INVALID ON MPV.APP.  PROTECTED-CALL.
    if pcode then return pval end                                                       --OTHERWISE pcode,pval=false,string.
end

function  gp(property)  --ALSO @file_loaded, @seek, @on_toggle & @property_handler.  GET-PROPERTY.
    p       [property]=mp.get_property_native(property) 
    return p[property]
end

p  .platform  = gp('platform') or os.getenv('OS') and 'windows' or 'linux' --platform=nil FOR OLD MPV.  OS=Windows_NT/nil.  SMPLAYER STILL RELEASED WITH OLD MPV.
o[p.platform] = {}                                                         --DEFAULT={}
for  opt,val in pairs(options)
do o[opt]     = val end              --CLONE
require 'mp.options'.read_options(o) --yes/no=true/false BUT OTHER TYPES DON'T AUTO-CAST.
for  opt,val in pairs(o) do if type(options[opt])~='string' then o[opt]=pexpand(val) end end  --NATIVES PREFERRED, EXCEPT FOR GRAPH INSERTS.  

for _,opt in pairs(o[p.platform].options or {}) do table.insert(o.options,opt) end  --platform OVERRIDE APPENDS TO o.options.
for _,opt in pairs(o.options)                                                                   
do command           = ('%s no-osd set %s;'):format(command or '',opt) end  --ALL SETS IN 1.
command              = command and mp.command(command)
for opt,val in pairs(o[p.platform])
do o[opt]            = val end              --platform OVERRIDE. 
utils                = require 'mp.utils'   --@pexpand_to_string
label                = mp.get_script_name() --autocomplex
playback_restarted   = gp('time-pos')       --FILE ALREADY LOADED.
for key in ('np tp'):gmatch('[^ ]+')        --(tp) OPTIONAL.  OVERRIDE FOR NO TIME-DEPENDENCE PREVENTS DIVISION BY 0.  gmatch=GLOBAL MATCH ITERATOR.  '[^ ]+'='%g+' REPRESENTS LONGEST string EXCEPT SPACE. %g (GLOBAL) PATTERN INVALID ON MPV.APP (SAME _VERSION, DIFFERENT BUILD).
do    o.gsubs[key]   = o.period..''=='0' and '(0)' or o.gsubs[key] end                          --..'' CONVERTS→string.  
for opt in ('rotate zoompan filterchain dual_filterchain overlay dual_overlay'):gmatch('[^ ]+') --options WHICH NEED gsubs.  filterchain OPTIONAL.  
do          o[opt]   = o[opt]..''
    for N            = 1,o.gsubs_passes do for key,gsub in pairs(o.gsubs)           --gsubs DEPEND ON EACH-OTHER.
        do  o[opt]   = o[opt]    :gsub('%('..  key..'%)','('..gsub..')') end end end --() ARE MAGIC.  RECURRING BRACKETS ARE AN ISSUE.
for opt in ('rotate zoompan filterchain dual_filterchain'):gmatch('[^ ]+')  
do          o[opt]   = o[opt]    :gsub('%(fpp%)',('(%s*%s)'):format(o.period,o.volume_fps)) end --ANIMATIONS ARE @volume_fps. CAN OPTIMIZE USING DIFFERENT fps.  dual_filterchain IS LIKE rotate.  (fpp) SUBSTITUTION IS SPECIAL BECAUSE IT DEPENDS ON THE EXACT FILTER. CAN BE '22/30*25'.
for opt in ('                 overlay     dual_overlay    '):gmatch('[^ ]+')                    --OVERLAYS   ARE @STREAM fps.
do          o[opt]   = o[opt]    :gsub('%(fpp%)',('(%s*%s)'):format(o.period,o.       fps)) end --fpp SHOULD BE INTEGER.
for N,sine in pairs(o.sine_mix)  --EXTENDS o.af_chain INTO A SUBGRAPH, IN EFFECT, OR ELSE IT'S BLANK.  
do amix              = (",sine='%s',volume='%s'[a%d]%s[a%d]"):format(sine[1],sine[2],N,amix or ',[ao]',N) end  --RECURSIVELY GENERATE ALL sine WAVES (WITH THEIR volume).  "," SEPERATES THE SINES FROM THE MIX.
amix                 = amix and ('[ao]%s amix=%d:first'     ):format(amix,#o.sine_mix+1)    or ''  --MIXES [ao][a1][a2]...  SINE WAVES ARE INFINITE DURATION.  SINGLETON amix VALID, BUT I LEAVE IT OUT.
vflip                = o.vflip_scale_h and o.vflip_scale_h..''~='0' 
                       and    ("vflip,scale='iw:ih*(%s)',pad='0:ih/(%s):0:0:BLACK@0'"):format(o.vflip_scale_h,o.vflip_scale_h)  --scale & pad FOR BOTTOM. PADDING SIMPLIFIES CODE.
vstack               = not (not vflip and o.vflip_only) and o.filterchain..','..((  --PREPEND COLOR SHUFFLING, UNLESS NULL OVERRIDE.
                          not   vflip      and         'pad=0:ih*2:0:0:BLACK@0'     --TOP ONLY. pad*2 FOR ABSENT BOTTOM SIMPLIFIES CODE.
                          or  o.vflip_only and vflip..',pad=0:ih*2:0:oh-ih:BLACK@0' --BOTTOM ONLY, pad DOUBLE.  
                          or 'split[U],%s[D],[U][D]vstack'):format(vflip)           --BOTH  [U],[D] = UP,DOWN = TOP,BOTTOM  vstack IS TOP/BOTTOM.
                       )
o. volume_scale[2]   =     o. volume_scale[2] or   o. volume_scale[1]  --BY DEFAULT SCALE_H=SCALE_W (...scale[2]=...scale[1])  THESE 3 MUST BE WELL-DEFINED.
o.overlay_scale[2]   =     o.overlay_scale[2] or   o.overlay_scale[1] 
o.   dual_scale[2]   =     o.   dual_scale[1] and (o.   dual_scale[2] or o.dual_scale[1])*o.freqs_clip_h*2  --CLIP HEIGHT FOR (PADDED) TOP & BOTTOM (*2). RATIO RELATIVE TO display-height.  
dual                 = not o.   dual_scale[1] and ''  --NO dual. OR ELSE dual BELOW.
                       or (",[ov]split[ov],%s[dual],[dual][vo]scale2ref=floor(iw*(%s)/4)*4:floor(ih*(%s)/4)*4[dual][vo],[vo][dual]overlay='%s'[vo]"):format(o.dual_filterchain,o.dual_scale[1],o.dual_scale[2],o.dual_overlay)  --APPLY FILTERCHAIN FIRST BECAUSE [ov] IS ONLY ~1K, NOT 4K LIKE [vo].
zoompan              = ((o.zoompan or '')=='' and "scale='floor((%s)*%%d/4)*4:floor((%s)*%%d/4)*4'" --ONLY zoompan (& POSSIBLY rotate) NEED RECIPROCAL PADDING.  OPT-IN BECAUSE IT REDUCES PERFORMANCE (TESTED 100+ NULL-OPS).
                        or "pad='iw/(%s):ih/(%s):(ow-iw)/2:(oh-ih)/2:BLACK@0',zoompan='%s:d=1:s=%%dx%%d:fps=%s'"):format(o.overlay_scale[1],o.overlay_scale[2],o.zoompan,o.volume_fps):gsub('%(n%)','(on)')  --(n)→(on)
o.freqs_fps_albumart = min(o.freqs_fps_albumart,o.volume_fps)  


graph=("[aid%%d]%s%s,asplit[ao],stereotools,%s,apad,asplit[freqs],aformat=s16,showvolume=%s:0:128:8:t=0:v=0:o=v:%s,format=gbrap,shuffleplanes=1:0,lutrgb='g=0:a=val*(%s)',split=3[vol][BAR],crop='iw/2*3/4:ih*(%s):(iw-ow)/2:(ih-oh)*(1-(%s))',lutrgb='%s',pad=iw*4/3:ih+(ow-iw)/a:(ow-iw)/2:oh-ih:%s,split,hstack,split[feet0],shuffleplanes=0:2:1[feet],[vol][feet0]vstack[vol],[BAR][feet]vstack,lutrgb='a=val*(%s)',split[RGRID],crop=iw/2:ih:0,pad='iw/(%s):0:0:0:BLACK@0',split=10,hstack=10,crop=iw-4:ih:iw-ow,pad=iw+4:0:0:0:BLACK@0[LGRID],[RGRID]crop=iw/2:ih:iw/2,pad='iw/(%s):0:ow-iw:0:BLACK@0',split=10,hstack=10,crop=iw-4:ih:0,pad=iw+4:0:ow-iw:0:BLACK@0[RGRID],[LGRID][RGRID]hstack,pad='0:ih*(%s)/(%s):0:oh-ih:BLACK@0'[grid],[freqs]aformat=s16:%s,asetpts='max(0,PTS-(%s)/TB)',dynaudnorm=%s,aformat=s16,showfreqs=%s:colors=BLUE|RED:%%s,fps=%%s,crop='iw/1.05:ih*(%s)/(%s):0:ih-oh',format=gbrp,scale=iw*2:-1,avgblur=1:2^2+2^1,lutrgb='255*gt(val,140):0:255*gt(val,140)',avgblur=2:2^2+2^1,lutrgb='r=255*gt(val,90):b=255*gt(val,90)',framerate=%%s,format=gbrap,split[R],shuffleplanes=0:0:1:1,hflip[L],[R]shuffleplanes=0:0:2:2[R],[grid][L]scale2ref=iw*2-2:ih,overlay[grid+L],[grid+L][R]overlay=W-w,scale=ceil(iw/4)*4:ceil(ih/4)*4,split=3[LHI][RHI],crop=iw/2[MIDDLE],[LHI]crop=iw/4:ih:0,shuffleplanes=0:2:1[LHI],[RHI]crop=iw/4:ih:iw-ow,shuffleplanes=0:2:1[RHI],[LHI][MIDDLE][RHI]hstack=3[ov],[vol][ov]scale2ref='round(iw*(%s)/4)*4:round(ih*(%s)/(%s)/4)*4'[vol][ov],[ov][vol]overlay=(W-w)/2:H-h,format=bgra,format=gbrap,%s[ov],%%s fps=%s,format=yuva420p,scale=%%d:%%d,format=yuva420p,split=3[vo][t0],crop=1:1:0:0:1:1,fps=%s,lutyuv=0:128:128:0[to]%s,[to][ov]scale2ref,overlay,setpts=PTS-STARTPTS,rotate='%s:c=BLACK@0',%%s[ov],[vo]setpts=PTS-STARTPTS[vo],[vo][ov]overlay='%s'[vo],[t0]trim=end_frame=1[t0],[t0][vo]concat,trim=end=%%s:start_frame=1,fps=%s,setpts=PTS-1/FRAME_RATE/TB,format=%%s[vo]"
):format(o.af_chain,amix,o.volume_af_chain,o.volume_fps,o.volume_opts,o.volume_alpha,o.feet_height,o.feet_activation,o.feet_lutrgb,o.shoe_color,o.grid_alpha,o.grid_thickness,o.grid_thickness,o.freqs_clip_h,o.grid_height,o.freqs_samplerate,o.freqs_lead_time,o.freqs_dynaudnorm,o.freqs_opts,o.freqs_clip_h,o.freqs_scale_h,o.volume_scale[1],o.volume_scale[2],o.freqs_clip_h,vstack,o.fps,o.volume_fps,dual,o.rotate,o.overlay,o.fps)  --volume_fps REPEATS FOR volume, TIME-STREAM [to] & zoompan.  fps REPEATS FOR [vo] & AFTER concat.  freqs_clip_h CROPS freqs & PADS volume & [grid].  grid_thickness REPEATS FOR [LGRID] & [RGRID].

----lavfi             LIBRARY-AUDIO-VIDEO-FILTERGRAPH:  [vid#]=VIDEO-IN [aid#]=AUDIO-IN [vo]=VIDEO-OUT [ao]=AUDIO-OUT [ov]=OVERLAY(SPECTRUM) [freqs]=AUDIO-FREQS [to]=TIME-OUT(1x1) [t0]=STARTPTS-FRAME [L]=LEFT [R]=RIGHT [vol]=VOLUME [grid]=VOL-BARS  ALSO [LGRID][RGRID][LHI][RHI].  SELECT FILTER NAME OR LABEL TO HIGHLIGHT IT. SIDE-SCROLL PROGRAMMING, WITH LINEDUPLICATE ETC.  %% SUBS OCCUR LATER.  (%s) FOR MATH.  '%s' BLOCKS STRINGS FROM SPLITTING.  lavfi-complex MAY COMBINE MANY [aid#] & [vid#] INPUTS. IT'S LIKE DNA & CAN CREATE VARIOUS CREATURES. SEE FFMPEG-FILTERS MANUAL.  EACH FOOT HAS A STEREO INSIDE IT. [feet0] (SHOES) ARE THE CENTER-PIECE.  [to] & [t0] CODES ALWAYS VALID, EVEN ON YOUTUBE & FOR MP4 SUBCLIPS WITH OFF TIMESTAMPS. IMPOSSIBLE TO ALWAYS CORRECTLY ENTER NUMBERS LIKE time-pos OR audio-pts. CANVAS [to] SWITCHES OUT [ao]→[vo] TIMESTAMPS (IT'S ACTUALLY [time-vo]).
----showvolume      = r:b:w:h:f:...:t:v:o:...:dm:dmc                                       DEFAULT=25:1:400:20:0.95:...:t=1:v=1:o=h:...:dm=0:dmc=orange  →rgba  rate:CHANNEL_GAP:LENGTH:THICKNESS/2:FADE:...:CHANNELVALUES:VOLUMEVALUES:ORIENTATION:...:DISPLAYMAX:DISPLAYMAXCOLOR  LENGTH MINIMUM ~100. t & v ARE TEXT & SHOULD BE DISABLED.  THERE'S SOME TINY BLACK LINE DEFECT, WHICH BLUE COVERS UP.
----showfreqs       = size:rate:mode:ascale:fscale:win_size:win_func:...:averaging:colors  DEFAULT=1024x512:25:bar:log:lin:2048:hanning:...:1            →rgba  rate INCOMPATIBLE WITH FFMPEG-v4. size SHOULD HAVE ASPECT APPROX 3x5 FOR HEALTHY CURVE TO BE EQUALLY THICK IN HORIZONTAL & VERTICAL (300x300 & 300x700 ARE OFF).  win_size BTWN 256 & 2048.  cmode=separate WOULD REQUIRE TWICE AS MANY PIXELS.
----dynaudnorm      = ...:g:p:m:...:b           DEFAULT=...:31:.95:10:...:0  ...:GAUSSIAN_WIN_SIZE(ODD>1):PEAK_TARGET[0,1]:MAX_GAIN[1,100]:...:BOUNDARY_MODE[0/1]  IS THE START.  DYNAMIC AUDIO NORMALIZER OUTPUTS A BUFFERED STREAM WITH TB=1/SAMPLE_RATE & FORMAT=doublep.  MAY BE BLANK.  b=NO_FADE (FADE NOT FOR SPECTRUM). IT MAY SLOW DOWN YOUTUBE, BY PRE-LOADING MANY FRAME-LENGTHS (g=31). LOWER g MAY GIVE FASTER RESPONSE. ALTERNATIVES INCLUDE loudnorm & acompressor, BUT dynaudnorm IS BEST. 
----sine            = f:b                       DEFAULT=440:0=frequency:beep_factor (Hz,BOOL)  →s16  beep IS EVERY SECOND.  FOR sine_mix CALIBRATION.
----volume          = volume                    DEFAULT=1             RATIO. sine VOLUMES. FORMS TRIPLE WITH sine & amix.
----amix            = inputs:duration           DEFAULT=2:longest     MIXES IN SINES. [a1][a2]...→[ao]
----hstack,vstack   = inputs                    DEFAULT=2             COMBINES THE VOLUMES INTO A 20 TICK STEREO RULER. ALSO COMBINES feet.  vstack FOR FEET & TOP/BOTTOM.
----split,asplit    = outputs                   DEFAULT=2             CLONE STREAMS.
----highpass        = f              (→floatp)  DEFAULT=3000 Hz       firequalizer IS MORE GENERAL & COULD MULTIPLY BY FREQUENCY. A CHIRP MAY BECOME DEAFENING @DOUBLE FREQUENCY.
----setpts,asetpts  = expr                      DEFAULT=PTS           PRESENTATION TIMESTAMP, FOR SYNC OF rotate,zoompan,overlay WITH OTHER GRAPHS (automask), BY SENDING STARTPTS→0. SHOULD SUBTRACT 1/FRAME_RATE/TB FROM [t0].  asetpts LEADS THE SPECTRUM BY BACKDATING AUDIO.
----shuffleplanes   = map0:map1:map2:map3       DEFAULT=0:1:2:3       REDUCES CPU USAGE BY >5% COMPARED TO colorchannelmixer. ORDERED g:b:r:a (LIKE GreatBRitAin, WITH RED ON RIGHT). SHUFFLES WITHOUT MIXING.  FFMPEG-v4 COMPATIBILITY DEPENDS ON EXACT USAGE.  SWITCHES [vol] GREEN & BLUE, [feet] FROM [feet0], & COLORS HIGHS VS LOWS, & [L][R] CHANNELS.
----fps             = fps:start_time (SECONDS)  DEFAULT=25            LIMITS STREAM @file-loaded. ALSO FOR OLD MPV showfreqs. start_time FOR JPEG(TOGGLE OFF).  ALSO ENSURES FRAME_RATE IS WELL-DEFINED.
----framerate       = fps                       DEFAULT=50            NULL-OP USES NO CPU.  FORCES alpha REMOVAL.  NEGATIVE TIME CAUSES BUG.  DOUBLING freqs_fps ADDS 10% CPU USAGE. 
----rotate          = a:ow:oh:c:...:enable      DEFAULT=0:iw:ih:BLACK (RADIANS:p:p) ROTATES CLOCKWISE. MAY DEPEND ON n & t.  IT HAS pad BUILT IN.  
----zoompan         = z:x:y:d:s:fps     (z>=1)  DEFAULT=1:0:0:...:hd720:25  d=1 (OR 0) FRAMES DURATION-OUT PER FRAME-IN.  z:x:y MAY DEPEND ON  INPUT-NUMBER=in=on=OUTPUT-NUMBER  zoompan OPTIMAL FOR ZOOMING.
----crop            = w:h:x:y:keep_aspect:exact DEFAULT=iw:ih:(iw-ow)/2:(ih-oh)/2:0:0  NULL-OP USES NO CPU.  ZOOMS IN ON ascale & fscale. REMOVES MIDDLE TICK ON GRID. SEPARATES LOWS FROM [LHI] & [RHI]. CROPS 5% OFF DATA. FFMPEG-v4 REQUIRES ow INSTEAD OF oh (DEPENDING).
----pad,apad        = w:h:x:y:color,...         DEFAULT=0:0:0:0:BLACK BUILDS GRID/RULER & FEET. 0 MAY MEAN iw OR ih. pad OUT BEFORE zoompan IN!  apad APPENDS SILENCE OR VISUALS HANG NEAR @end-file. AN ALTERNATIVE IS TO EXPAND TIMESTAMPS NEAR end-file, SET --end OR TRIM SHORT.  TESTED MPV-v0.38 ON 10 HOURS albumart+automask.lua.
----scale,scale2ref = w:h                       DEFAULT=iw:ih         [0][vo]→[0][vo] 2REFERENCE SCALES [0] USING DIMENSIONS OF [vo].  NULL-OP USES NO CPU.  SCALES TO display FOR CLEARER SPECTRUM ON LOW-RES video. CAN ALSO OBTAIN SMOOTHER CURVE BY SCALING UP A SMALLER ONE.  ALSO SCALES volume.  dst_format & flags=bilinear CAN ALSO BE SET.  
----overlay         = x:y          (→yuva420p)  DEFAULT=0:0           OVERLAYS DATA ON GRID & VOLUME ON-TOP. ALSO: 0Hz RIGHT ON TOP OF 0Hz LEFT (DATA-overlay INSTEAD OF hstack). MAY DEPEND ON t & n.  UNFORTUNATELY THIS FILTER HAS AN OFF BY 1 BUG IF W OR H ISN'T A MULTIPLE OF 4. AN EVEN HALF PLANE WIDTH (MULTIPLE OF 4) MAY HAVE BEEN SIMPLER FOR FFMPEG TO OPTIMIZE.  
----lutyuv,lutrgb   = y:u:v:a,r:g:b:a           DEFAULT=val           LOOK-UP-TABLE-BRIGHTNESS-UV,RED-GREEN-BLUE  GRAY=126:128:128:255=128:128:128:255  lutyuv CONVERTS gbrap→yuva444p. lutrgb CONVERTS yuva420p→argb. lutyuv IS MORE EFFICIENT THAN lutrgb DUE TO FORCED FORMATTING.  lut HAS A BUG WHERE MAYBE r=green BECAUSE IT ASSUMES r IS PLANE 0 FOR gbrap.  lutyuv CREATES TRANSPARENCY & CANVAS. lutrgb SELECTS CURVE FROM BLUR BRIGHTNESS. CURVE SMOOTHNESS & THICKNESS DOUBLE-CALIBRATED USING lutrgb>140 & 90.  SERATED-RAZOR-CURVE IS ANOTHER IDEA.
----avgblur         = sizeX:planes AVERAGE BLUR DEFAULT=1:15          (INTEGER:<16)  sizeY=sizeX (PIXELS)  FOR gbrap planes=8(GREEN)+4(BLUE)+2(RED)+1(ALPHA)=2^3+2^2+2^1+2^0.  CONVERTS JAGGED CURVE INTO BLUR, WHOSE BRIGHTNESS GIVES SMOOTHER CURVE.
----trim            = ...:end:...:start_frame:end_frame  DEFAULT start_frame=0  TRIMS 1 FRAME OFF THE START FOR ITS TIMESTAMP, & ENDS THE COMPLEX. IT ACCURATELY ENDS albumart (ASIDE FROM --end).
----loop            = loop:size  ( >=-1 : >0 )  LOOPS BOTH albumart & image (SEE TOGGLE).
----aformat,format  = sample_fmts:sample_rates,pix_fmts  s16:Hz,{yuva420p,yuv420p,bgra,gbrp=rgb24,gbrap}  IS THE FINISH ON [vo] (TO REMOVE alpha). MAY BE BLANK.  gbrap (GreatBRitAin Planar) ASSUMED BY shuffleplanes & avgblur. REQUIRED IN FFMPEG-v4.2.  HOWEVER bgra (RGB BACKWARDS) ALSO REQUIRED FOR EFFICIENT SCALING FROM COLORED HALF-PLANES (SOLVES ERRORS). SO IT'S USED IN BTWN gbrap & yuva420p (FORCED BY overlay).  yuva420p MAY BE MORE OPTIMAL THAN RGB FORMATS (bgra gbrap) OR yuva444p.  aformat REMOVES doublep PRECISION AFTER dynaudnorm, & DOWNSAMPLES TO 2.1kHz (NYQUIST+5%). 
----anull             IS THE START IN af_chain.  PLACEHOLDER.
----nullsink          FOR ERROR DETECTION.
----hflip,vflip       HORIZONTAL,VERTICAL  hflip FOR [L] LEFT.  vflip FOR BOTTOM [D] (DOWN).
----stereotools       CONVERTS MONO & SURROUND SOUND TO stereo.  ALTERNATIVE TO aformat.  softclip INCOMPATIBLE WITH FFMPEG-v4.
----setsar            SAMPLE ASPECT RATIO  IS WHAT MPV CALLS par, NOT sar.  FOR albumart SAFE concat OF [t0].  ZEROES OUT ITS SAR, FOR SAR CONGRUENCE.  IT'S SAFER TO NOT USE THIS ON [vo] DSIZE.
----concat            [t0][vo]→[vo] FINISHES [t0].  CONCATENATE STARTING TIMESTAMP, ON INSERTION. OCCURS @seek. NEEDED TO SYNC WITH automask.


function file_loaded()  --ALSO @seek, @property_handler & @on_toggle.
    p.start   = p.start and mp.set_property('start','none') and nil            --REMOVE start IF DUE TO INSTA-stop @property_handler.  PERSISTS OTHERWISE.  ALTERNATIVELY CAN seek.
    a_id,v    = gp('current-tracks/audio/id'),gp('current-tracks/video'  ) or {} --aid (number/string/false) IS A SETTING FOR a_id (number/nil). aid,a_id = false,1 CAN OCCUR @vid RELOAD.  p.aid & a_id ARE KEPT SEPARATE TO HANDLE EVERY CIRCUMSTANCE.
    W         = o.video_params.w           or gp('display-width'         ) or android_surface_size.w or gp('width' ) or v['demux-w'] or 1280  --number/string.  OVERRIDE  OR  display  OR  android  OR  PARAMETERS  OR  TRACK  OR  (FALLBACK FOR RAW MP3 IN VIRTUALBOX).  width=nil SOMETIMES @file-loaded, & MAY BE MUCH LARGER THAN display SINCE MEMORY IS CHEAP.  
    H         = o.video_params.h           or gp('display-height'        ) or android_surface_size.h or gp('height') or v['demux-h'] or 720
    FORCE_OFF = gp('current-vo')=='null'   or not a_id                     or not vstack  --current-vo=null FOR ANDROID BACKGROUND-PLAYING.  a_id=nil FOR JPEG.  vstack=nil FOR NO SPECTRUM.  current-vo=nil PROCEEDS.  null BAD, nil GOOD!
    alpha     = gp('video-params/alpha')   or gp('video-dec-params/alpha') or not a_id      and v.image    or not v.id   --DETECTING alpha IS IMPOSSIBLE WITHOUT STUTTER/DELAY @LOAD (~.1s).  GUESS true FOR RAW PNG & RAW MP3.  COULD ALSO ACTIVATE FOR albumart BUT TRANSPARENCY IS RARE, COULD REDUCE PERFORMANCE ON SOME platform, & CAUSES OTHER SCRIPT/S TO STUTTER/RELOAD. ASSUMING alpha COULD REDUCE fps.
    format    = o.video_params.pixelformat or p['current-vo']=='shm' and 'yuv420p' or alpha and 'yuva420p' or 'yuv420p'  --OVERRIDE  OR  SHARED-MEMORY  OR  TRANSPARENT  OR  NORMAL.  FORCING yuv420p OR yuva420p IS MORE RELIABLE. MPV.APP COMPATIBLE WITH TRANSPARENCY, BUT NOT SMPLAYER.APP.  overlay FORCES yuva420p, BUT alpha ON FILM TRIGGERS BUG/S IN OTHER SCRIPT/S.  lavfi-complex CAN'T DETECT WHETHER alpha EVER EXISTED WITHOUT A DELAYED TRIGGER, BUT THE .1s DELAY CAN CAUSE STUTTER/LAG.
    if   OFF or FORCE_OFF 
    then OFF  = nil  --TOGGLE OFF IF OFF.  EXAMPLE: JPEG=OFF-albumart.  SOMETIMES A file-loaded CAN BE JUST A TOGGLE OFF.
         on_toggle() 
         return end  --ON BELOW.
    
    p.duration      = round(gp('duration'),.001)  --NEAREST MILLISECOND.  ALTERNATIVE IS TO mp.add_hook('on_unload',...).
    m.zoompan       = zoompan: format(round(W,4),round(H*o.freqs_clip_h*2,4))       --OVERLAY SCALE, FOR zoompan. vstack*2 FACTOR (ALSO VALID IF TOP-ONLY).  THE DUAL USES scale2ref INSTEAD.  "m." WHEN SUBBING IN TO SCHEMATIC. 
    freqs_fps       = (v.image or not v.id) and o.freqs_fps_albumart or o.freqs_fps --SOME ANIMATIONS CAN BE DONE SMOOTHER ON albumart.
    framerate       = o.freqs_interpolation and o.volume_fps         or   freqs_fps --INTERPOLATION: freqs_fps→volume_fps
    error_showfreqs =     error_showfreqs   or  not freqs_rate and not mp.command(("no-osd af pre @%s:lavfi=[asplit[ao],showfreqs=rate=%s,nullsink]"):format(label,freqs_fps)) --~freqs_rate MEANS ONCE ONLY. command RETURNS true IF SUCCESSFUL.  ERROR ON FFMPEG-v4 (.AppImage)  FFMPEG-v4 OPERATES showfreqs @25fps (.AppImage & .snap). NEWER VERSIONS SUPPORT ANY fps.  NEW MPV MAY USE OLD FFMPEG COMPONENTS.  BUT ERROR MORE RELIABLE THAN VERSION NUMBERS BECAUSE THEY CAN BE ANYTHING.  THIS LINE ASSUMES AUDIO EXISTS, WHICH IS AN ISSUE FOR CASE 4.
    remove_filter   = not error_showfreqs   and not freqs_rate and     mp.command( 'no-osd af remove @'..label)                                                                --IF ABLE TO.
    freqs_rate      =     error_showfreqs   and '' or 'rate='..freqs_fps
    underlay        = --3 ON CASES:  1) VIDEO  2) albumart  3) AUDIO-ONLY.
                      v.id and not v.image  and ('[vid%d]'):format(v.id)  --CASE 1: NORMAL VIDEO.  USUALLY [vid1].
                      or           v.image  and ('[vid%d]scale=%d:%d,format=yuva420p,loop=-1:1[vo],[ov]split[ov],trim=end_frame=1,crop=1:1:0:0:1:1,format=yuva420p,scale=%d:%d,setsar[t0],[t0][vo]concat,trim=start_frame=1,'):format(v.id,W,H,W,H)  --CASE 2 (albumart) IS THE MOST COMPLICATED. albumart IS LOOPED, WITH ATOMIC TIMESTAMP FRAME [t0] PREPENDED & TRIMMED, TO SUPPORT PROPER seeking.  ALTERNATIVE IS TO INSERT time-pos @seek BUT THAT CAUSED SOME LAG.
                      or                         '[ov]split[ov],crop=1:1:0:0:1:1,lutyuv=0:128:128:0,' --CASE 3  (RAW AUDIO)  underlay USES [ov] (SPECTRUM) INSTEAD OF [vid#], TO BUILD BLANK 1x1 SCALED UP AS THOUGH IT'S A FILM.
                      or                         ''                                                   --CASE 4 IS MISSING: ~a_id + o.sine_mix  IT NEEDS TOGGLE TOO, FOR sine_mix ON JPEG.  AN image CAN HAVE AUDIO ADDED TO IT, LIKE AUDIO CAN HAVE VIDEO ADDED TO IT.
    m.graph         = graph: format(a_id,freqs_rate,freqs_fps,framerate,underlay,W,H,m.zoompan,p.duration,format):gsub('%(random%)','('..random()..')') 
    mp.set_property('lavfi-complex',m.graph)  --FOR graph BYTECODE.  
end 

function on_toggle()  --@script-message, @script-binding, @property_handler, & @file-loaded.  REMOVES THE SPECTRUM FROM THE lavfi-complex, OR ELSE RELOADS.  DOESN'T UNLOCK aid & vid.
    OFF        = not OFF                                               --OFF SWITCH.  
    if not W then return end                                           --LOGIC STATE ONLY BTWN FILES.
    start_time = OFF        and v.image and round(gp('time-pos'),.001) --NEEDED @seek.
    m.graph    = OFF        and                                        --OFF GRAPH.
                 ''                                               
                 ..(a_id    and ('[aid%d]%s[ao]'):format(a_id,o.af_chain) or '')  --PREPEND AUDIO.
                 ..(a_id    and v.id        and  ','                      or '')  --PREVENTS TRAILS ',' & ';', WHICH BUG OUT ON FFMPEG-v5.
                 ..(nil     
                    or v.id and not v.image and ("[vid%d]fps=%s,scale=%d:%d,format=%s[vo]"             ):format(v.id,o.fps,W,H,format)                  --CASE 1: TOGGLE OFF MP4.  fps OPTIONAL, BUT scale & format PREVENT EMBEDDED MPV SNAPPING. 
                    or              v.image and ("[vid%d]scale=%d:%d,format=%s,loop=-1:1,fps=%s:%s[vo]"):format(v.id,      W,H,format,o.fps,start_time) --CASE 2: image. MORE GENERAL THAN albumart.  CAN USE ~25% CPU @FULLSCREEN.  NEED start_time FOR --start.  FFMPEG-v5 TAKES A STILL FRAME (DIFFERENT, BUT VALID).  UNFORTUNATELY SNAPS EMBEDDED MPV.
                    or '')                                                                                                                                --CASE 3: NOTHING BUT RAW audio STATIC SPECTRUM.  CAN CHECK MPV LOG FOR OUTPUT IN EACH CASE. 
    toggle     = OFF  and mp.set_property('lavfi-complex',m.graph) or file_loaded() --OFF  OR  ON.  ON RE-RANDOMIZES.
    OFF        = OFF  and not FORCE_OFF                                             --FORGET OFF STATE IF FORCED OFF (NO AUDIO, ETC).  playlist-next SHOULD SWITCH ON IF NEEDED (.GIF→.MP4).
    command    = a_id and o.toggle_command~='' and mp.command(o.toggle_command)     
end
for key in o.key_bindings: gmatch('[^ ]+') 
do mp.add_key_binding(key,'toggle_complex_'..key,on_toggle) end  
mp   .add_key_binding(nil,'toggle_complex'      ,on_toggle)  --UNMAPPED binding.

function    event_handler(event)
    event = event.event
    if      event=='start-file'  then mp.set_property('lavfi-complex','') --UNLOCKS STREAMS.  PRIOR lavfi-complex MAY HANG IF [vid2] SUDDENLY DOESN'T EXIST.
    elseif  event=='end-file'    then W,playback_restarted = nil          --CLEAR SWITCHES.
    elseif  event=='file-loaded' then file_loaded()   
    elseif  event=='seek'        then on_seek = gp('time-remaining')==0 and mp.command('playlist-next force') or timers.seek:resume()  --SKIP-10 BUGFIX FOR seek PASSED end-file.  playlist-next FOR MPV PLAYLIST. force FOR SMPLAYER PLAYLIST.  A CONVENIENT WAY TO SKIP NEXT TRACK IN SMPLAYER IS TO SKIP 10 MINUTES, PASSED end-file.
    else    timers.playback_restarted:resume() end  --UNBLOCKS TOGGLE-TIMERS.
end 
for event in ('start-file end-file file-loaded seek playback-restart'):gmatch('[^ ]+') 
do mp.register_event(event,event_handler) end

timers.playback_restarted = mp.add_periodic_timer(.01,function() playback_restarted = true end)  --playback-restart CAN TRIGGER BEFORE aid, BY LIKE 1ms, FOR albumart.  aid FULLY TOGGLES THIS SCRIPT, SO IT'S LIKE FATAL.
timers.seek               = mp.add_periodic_timer(.5 ,function() reload             = start_time and abs(start_time-gp('time-pos'))>2 and file_loaded() end)  --JPEG PRECISE seeking (hr-seek).  TAKES <HALF A SECOND FOR ACCURATE time-pos.  IF STARTPTS CHANGES MORE THAN 1s/2s IT SHOULD BE RESET (FOR OTHER SCRIPT/S).   MAYBE A NULL AUDIO STREAM COULD BE SIMPLER.  IMPRECISE seek TRIGGERS playlist-next OR playlist-prev.

function property_handler(property,val)   
    p [property]             = val
    if property             == 'android-surface-size' and val
    then gmatch              = val: gmatch('[^x]+')  --'960x444'=SMARTN12-LANDSCAPE.  nil=WINDOWS.  display MAY MEAN SOMETHING ELSE TO A SMARTPHONE.
        android_surface_size = {w = gmatch(),h = gmatch()} end
    if not playback_restarted then return end  --PROCEED IF LOADED.
    
    for key in ('mute sid'):gmatch('[^ ]+')
    do toggle = property==key        and (not timers[key]:is_enabled() and (timers[key]:resume() or 1) or on_toggle()) end 
    ow        = o.video_params.w or p['display-width' ] or  android_surface_size.w or p.width  --NEW CANVAS SIZE.
    oh        = o.video_params.h or p['display-height'] or  android_surface_size.h or p.height
    reload    =           (W~=ow or H~=oh)        and not (not p.fs and p.platform=='android') and file_loaded()  --RELOAD UNLESS HALF-SCREEN-ANDROID (IT'S SPECIAL).  IGNORES SMARTPHONE ROTATION (COULD BE AN ACCIDENT). 
    val       = nil                                                   --FOR TRACK-CHANGE.
                or property=='aid' and   (a_id    and 'no' or 'auto') --DOESN'T SWITCH BTWN aid TRACKS.  INSTEAD IT MUTES ON/OFF.  THIS SCRIPT TOGGLES ON SINGLE-aid-TAP.
                or property=='vid' and   (v.id==1 and  2   or 'auto') --ONLY GOOD FOR SWITCHING BTWN 1 & 2.
    if not (       property=='aid' or property=='vid'      or property=='current-vo') then return end  --INSTA-stop BELOW. 
    p.start   = gp('time-pos')
    
    mp.command(''  --INSTA-stop.  UNFORTUNATELY SNAPS EMBEDDED MPV (DIMENSIONS CHANGE). AN ANTI-SNAP GRAPH IS MORE CODE.  ALTERNATIVES "video-reload" "rescan-external-files keep-selection" DON'T WORK IN THIS CASE.  THIS SCRIPT USES INSTA-stop INSTEAD OF INSTA-pause.  MPV BLACK-SCREENS WITHOUT INSTA-stop WHEN TOGGLING gpu-next/gpu/null, ETC.
               ..          'stop          keep-playlist;' 
               ..         ('no-osd set start         %s;'):format(p.start     )
               ..(val and ('no-osd set %s            %s;'):format(property,val) or '')  --set vid 2/auto  set aid no/auto
               ..          'playlist-play-index current;'
    )
end 
for property in ('fs mute sid aid vid display-width display-height width height android-surface-size current-vo'):gmatch('[^ ]+')  --BOOLEANS NUMBERS STRINGS
do mp.observe_property(property,'native',property_handler) end

for          property in ('mute sid'):gmatch('[^ ]+')  --NULL-OP DOUBLE-TAPS.  current-tracks/sub/selected(double_sub_timeout) IS ALT-TOGGLE REQUIRING OFF/ON, AS OPPOSED TO ID#.  SMPLAYER DOUBLE-MUTE WHILE seeking MAY FAIL (CANCELS ITSELF OUT).  
do    timers[property] = mp.add_periodic_timer(o[('double_%s_timeout'):format(property)],function()end) end
for _,timer in pairs(timers) 
do    timer.oneshot    = 1 --ALL 1SHOT.
      timer:kill() end     --FOR OLD MPV. IT CAN'T START timers DISABLED.

function pexpand_to_string(string)  --@pprint & @show.  RETURNS string/nil, UNLIKE pexpand.
    val = pexpand(string)
    return type(val)=='string' and val or val and utils.to_string(val)
end 

function show(string,duration)  --@script-message. 
    string = pexpand_to_string(string)
    return string and mp.osd_message(string,pexpand(duration))
end

function cleanup()  --@script-message.  ENABLES SCRIPT-RELOAD WITH NEW script-opts.
    OFF = OFF or on_toggle() --FORCE TOGGLE OFF.  AN ALTERNATIVE COULD INSTA-stop, BUT THEN start=time-pos PERSISTS.
    exit()
end 

function set(script_opt,val)  --@script-message.  DOESN'T RELOAD DEPENDENT FUNCTIONS.
    o[script_opt]=type(o[script_opt])=='string' and val or pexpand(val)  --NATIVE TYPECAST.
end

function callstring(string) loadstring(string)()             end  --@script-message.  CAN REPLACE ANY OTHER.
function pprint    (string) print(pexpand_to_string(string)) end  --@script-message.  PROTECTED PRINT. 
function exit      (      ) mp.keep_running = false          end  --@script-message & @cleanup.  false FLAG EXIT: COMBINES remove_key_binding, unregister_event, unregister_script_message, unobserve_property & timers.*:kill().
for message,fn in pairs({loadstring=callstring,print=pprint,show=show,exit=exit,quit=cleanup,set=set,toggle=on_toggle})  --SCRIPT CONTROLS.
do mp.register_script_message(message,fn) end

----SCRIPT-COMMANDS & EXAMPLES:
----script-binding                toggle_complex
----script-message-to autocomplex loadstring <string>
----script-message                loadstring math.randomseed(365)
----script-message                print      <string>
----script-message                print      m
----script-message                show       <string>            <duration>
----script-message                show       m                   10*random()
----script-message                set        <script_opt>        <val>
----script-message                set        freqs_interpolation true
----script-message-to autocomplex exit
----script-message-to autocomplex quit
----script-message-to autocomplex toggle

----APP VERSIONS:
----MPV      : v0.38.0(.7z .exe v3 .apk)  v0.37.0(.app)  v0.36.0(.app .flatpak .snap)  v0.35.1(.AppImage)  v0.34.0(win32)    ALL TESTED.  v0.34 INCOMPATIBLE WITH BOTH yt-dlp_x86 & THIS SCRIPT.
----FFMPEG   : v6.1(.deb)  v6.0(.7z .exe .flatpak)  v5.1.4(mpv.app)  v5.1.2(SMPlayer.app)  v4.4.2(.snap)  v4.2.7(.AppImage)  ALL TESTED.  MPV IS STILL OFTEN BUILT WITH 3 VERSIONS OF FFMPEG: v4, v5 & v6.
----PLATFORMS: windows  linux  darwin  android  ALL TESTED.  WIN-10 MACOS-11 LINUX-DEBIAN-MATE ANDROID-11.  WON'T OPEN JPEG ON ANDROID.
----LUA      : v5.1     v5.2  TESTED.
----SMPLAYER : v24.5, RELEASES .7z .exe .dmg .flatpak .snap .AppImage win32  &  .deb-v23.12  ALL TESTED.


----~300 LINES & ~7000 WORDS.  5 KINDS OF COMMENTS: THE TOP (INTRO), LINE EXPLANATIONS, LINE TOGGLES (options), MIDDLE (graph SPECS), & END (CONSOLE COMMANDS). ALSO BLURBS ON WEB.  CAPSLOCK MOSTLY FOR COMMENTARY & TEXTUAL CONTRAST.
----FUTURE VERSION COULD  COMBINE DOUBLE-TAPS INTO o.doubletap_property_binds & o.doubletap_timeout.
----FUTURE VERSION SHOULD MOVE o.toggle_command TO main.lua.  IT COULD ALSO OPERATE DOUBLE-TAPS.
----FUTURE VERSION SHOULD REPLACE (random) WITH $RANDOM/%RANDOM%.
----FUTURE VERSION SHOULD RESPOND TO CHANGING script-opts (function on_update).
----FUTURE VERSION SHOULD PUT UP A BLACK-SCREEN DURING FILE-LOAD, FOR INSTA-OSD/CLOCK (TO TIME THE LOAD).
----ISSUE: graph SHOULD BE OPTIMIZED SOMEHOW (extractplanes?). 

----SCRIPT WRITTEN TO TRIGGER AN FFMPEG ERROR ON OLD FFMPEG (v4 & OLDER). MORE RELIABLE THAN VERSION NUMBERS. 
----A DIFFERENT DESIGN COULD COMPRESS 1→10kHz INTO AN ELEVENTH TICKMARK, USING A SECONDARY showfreqs.  
----AN INEFFICIENT SMOOTH-TOGGLE COULD WORK BY VSTACKING THE COMPLEX ATOP FILM, & THEN COMMANDING AN EQUALIZER OVERLAYING THE TOP ATOP THE BOTTOM.  NOT WORTH THE EXTRA COMPLEXITY, RISK OF STARTING STUTTER, & CPU USAGE.

----ALTERNATIVE FILTERS:
----afftfilt          = real:imag:win_size:win_func:overlap  DEFAULT=1|1:1|1:4096:hann:0.75  (AUDIO FAST FOURIER TRANSFORM FILTER) overlap<1 CAUSES BUG. MAY HELP WITH o.volume_af_chain.
----select            = expr   EXPRESSION DISCARDS IF 0.     DEFAULT=1  MAY HELP WITH OLD MPV (PREVENTED MEMORY LEAK WHEN TRIMMING FOR [t0]).
----loudnorm          = I:LRA:TP  [-70,-5]:[1,20]:[-9,0]     DEFAULT=-24:7:-2=INTENSITY_TARGET:LOUDNESS_RANGE:TRUE_PEAK  CAUSED DEFECT REQUIRING apad. LACKS f & g SETTINGS. SOUNDED OFF.  OUTPUTS A BUFFERED STREAM.
----asettb            = tb    OPTIONAL TIMEBASE SPEC.
----extractplanes     = planes    r+b→[R][L] (RED+BLUE)   REVERSED IF [L] GETS FLIPPED AROUND.  MAYBE MORE OPTIMAL.
----colorchannelmixer = rr:...:aa  DEFAULT=rr=1:rg=0:...  [-2,2]:...  (r g b a PAIRS)  INEFFICIENT SO AVOID.
----geq                 GENERIC EQUATION IS TOO SLOW @25fps, EXCEPT ON A SINGLE GRID ELEMENT OR LINE. MAY BE POSSIBLE TO USE IT TO REMAP ONTO CIRCLE OR SMILY/FROWNY FACE.
----firequalizer        MAY BE NEEDED TO MULTIPLY BY frequency.
----acompressor         DEFAULT SMPLAYER NORMALIZER.
----aresample           (Hz) DOWNSAMPLES TO 2.1kHz (NYQUIST+5%). AN ALTERNATIVE IS aformat.
----alphamerge          [y][a]→[ya]  USES lum OF [a] AS alpha OF [ya]. CAN PAIR WITH split TO CONVERT BLACK TO TRANSPARENCY. ALTERNATIVES INCLUDE colorkey, colorchannelmixer & shuffleplanes.

----zoompan-WIDTH  ≈ 300*2*2/1.05                           --*2 FOR INTERNAL SCALE, *2 FOR [L] & [R], /1.05 FOR NYQUIST.  zoompan REQUIRES RAW NUMBERS.  s=300x500 FROM showfreqs.
----zoompan-HEIGHT ≈ 500*2*2/o.freqs_scale_h*o.freqs_clip_h --*2 FOR INTERNAL SCALE, *2 FOR vstack.  (/1.2*.25)
----ALTERNATIVE graph EXAMPLE. EXTRACTPLANES LR MONOCHROME (FASTER?).
----graph='[aid%%d]asplit[ao]%s,aformat=s16:channel_layouts=stereo,dynaudnorm=p=1:m=100:c=1:b=1,asplit[af],aformat=s16,showvolume=%s:0:%s:8:%s:t=0:v=0:o=v,colorchannelmixer=gg=0:bg=1:aa=%s,split[BAR],crop=iw/2*3/4:ih*(%s),lut=a=255*(%s),pad=iw*4/3:ih+(ow-iw)/a:(ow-iw)/2:oh-ih:WHITE@%s,split,hstack[FEET],[BAR][FEET]vstack,split=3[VOL][BAR],crop=iw/2:ih:0,pad=iw/%s:0:0:0:BLACK@0,split=10,hstack=10,crop=iw-4:ih:iw-ow,pad=iw+4:0:0:0:BLACK@0[LGRID],[BAR]crop=iw/2:ih:iw/2,pad=iw/%s:0:ow-iw:0:BLACK@0,split=10,hstack=10,crop=iw-4:ih:0,pad=iw+4:0:ow-iw:0:BLACK@0[RGRID],[LGRID][RGRID]hstack,pad=0:ih/(%s):0:oh-ih:BLACK@0[GRID],[af]aformat=s16:%s,asetpts=PTS-(%s)/TB,apad,highpass=%s,dynaudnorm=p=1:m=100:c=1:b=1,aformat=s16,showfreqs=256x512:mode=%s:ascale=lin:fscale=lin:win_size=%s:win_func=parzen:averaging=%s:colors=BLUE|RED,fps=%s,crop=iw:ceil(ih*(%s)/4)*4:0:ih-oh,extractplanes=r+b[R],hflip,pad=iw*2-(%s):0:0:0:BLACK@0[L],[R]split,alphamerge[R],[L][R]overlay=W-w,format=y8,scale=iw*2:-1,avgblur,lut=255*gt(val\\,140),avgblur=2,lut=255*gt(val\\,90),format=ya16,colorchannelmixer=ab=%s:rr=0:gg=0:aa=0[freqs],[GRID][freqs]scale2ref,overlay=0:H-h:endall,scale=ceil(iw/8)*8:ceil(ih/4)*4,split=3[HIGHR][LOWS],crop=iw/4:ih:0[HIGHL],[LOWS]crop=iw/2,colorchannelmixer=rr=0:bb=0:rb=1:br=1[LOWS],[HIGHR]crop=iw/4:ih:iw-ow[HIGHR],[HIGHL][LOWS][HIGHR]hstack=3[vid],[VOL][vid]scale2ref=floor(iw*%s/4)*4:ih*(%s)[VOL][vid],[vid][VOL]overlay=(W-w)/2:H-h,%s,setpts=PTS-STARTPTS,rotate=%s:iw:ih:BLACK@0,zoompan=%s:0:%%dx%%d:%s'

