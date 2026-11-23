let wasm_bindgen = (function(exports) {
    let script_src;
    if (typeof document !== 'undefined' && document.currentScript !== null) {
        script_src = new URL(document.currentScript.src, location.href).toString();
    }

    class Cinema3DRenderer {
        __destroy_into_raw() {
            const ptr = this.__wbg_ptr;
            this.__wbg_ptr = 0;
            Cinema3DRendererFinalization.unregister(this);
            return ptr;
        }
        free() {
            const ptr = this.__destroy_into_raw();
            wasm.__wbg_cinema3drenderer_free(ptr, 0);
        }
        /**
         * @param {number} video_w
         * @param {number} video_h
         */
        adjust_screen_aspect(video_w, video_h) {
            wasm.cinema3drenderer_adjust_screen_aspect(this.__wbg_ptr, video_w, video_h);
        }
        /**
         * @param {HTMLCanvasElement} canvas
         * @param {number | null} [fov_y]
         */
        constructor(canvas, fov_y) {
            const ret = wasm.cinema3drenderer_new(canvas, isLikeNone(fov_y) ? Number.MAX_SAFE_INTEGER : Math.fround(fov_y));
            if (ret[2]) {
                throw takeFromExternrefTable0(ret[1]);
            }
            this.__wbg_ptr = ret[0];
            Cinema3DRendererFinalization.register(this, this.__wbg_ptr, this);
            return this;
        }
        render_frame() {
            wasm.cinema3drenderer_render_frame(this.__wbg_ptr);
        }
        /**
         * @param {number} width
         * @param {number} height
         */
        resize(width, height) {
            wasm.cinema3drenderer_resize(this.__wbg_ptr, width, height);
        }
        /**
         * @param {number} fov
         */
        set_fov(fov) {
            wasm.cinema3drenderer_set_fov(this.__wbg_ptr, fov);
        }
        /**
         * @param {boolean} visible
         */
        set_people_visible(visible) {
            wasm.cinema3drenderer_set_people_visible(this.__wbg_ptr, visible);
        }
        /**
         * @param {number} yaw
         * @param {number} pitch
         */
        set_rotation(yaw, pitch) {
            wasm.cinema3drenderer_set_rotation(this.__wbg_ptr, yaw, pitch);
        }
        /**
         * @param {number} row
         * @param {number} seat
         */
        set_seat(row, seat) {
            wasm.cinema3drenderer_set_seat(this.__wbg_ptr, row, seat);
        }
        /**
         * @param {number} cur_row
         * @param {number} cur_seat
         * @param {number} oth_row
         * @param {number} oth_seat
         */
        set_selected_seats(cur_row, cur_seat, oth_row, oth_seat) {
            wasm.cinema3drenderer_set_selected_seats(this.__wbg_ptr, cur_row, cur_seat, oth_row, oth_seat);
        }
        /**
         * @param {number} delta_yaw
         * @param {number} delta_pitch
         */
        update_rotation(delta_yaw, delta_pitch) {
            wasm.cinema3drenderer_update_rotation(this.__wbg_ptr, delta_yaw, delta_pitch);
        }
        /**
         * @param {HTMLImageElement} img
         */
        update_texture_from_image(img) {
            const ret = wasm.cinema3drenderer_update_texture_from_image(this.__wbg_ptr, img);
            if (ret[1]) {
                throw takeFromExternrefTable0(ret[0]);
            }
        }
        /**
         * @param {HTMLVideoElement} video
         */
        update_texture_from_video(video) {
            const ret = wasm.cinema3drenderer_update_texture_from_video(this.__wbg_ptr, video);
            if (ret[1]) {
                throw takeFromExternrefTable0(ret[0]);
            }
        }
        /**
         * @returns {number}
         */
        get fov_y() {
            const ret = wasm.__wbg_get_cinema3drenderer_fov_y(this.__wbg_ptr);
            return ret;
        }
        /**
         * @returns {number}
         */
        get target_pitch() {
            const ret = wasm.__wbg_get_cinema3drenderer_target_pitch(this.__wbg_ptr);
            return ret;
        }
        /**
         * @returns {number}
         */
        get target_yaw() {
            const ret = wasm.__wbg_get_cinema3drenderer_target_yaw(this.__wbg_ptr);
            return ret;
        }
        /**
         * @returns {number}
         */
        get user_pitch() {
            const ret = wasm.__wbg_get_cinema3drenderer_user_pitch(this.__wbg_ptr);
            return ret;
        }
        /**
         * @returns {number}
         */
        get user_yaw() {
            const ret = wasm.__wbg_get_cinema3drenderer_user_yaw(this.__wbg_ptr);
            return ret;
        }
        /**
         * @param {number} arg0
         */
        set fov_y(arg0) {
            wasm.__wbg_set_cinema3drenderer_fov_y(this.__wbg_ptr, arg0);
        }
        /**
         * @param {number} arg0
         */
        set target_pitch(arg0) {
            wasm.__wbg_set_cinema3drenderer_target_pitch(this.__wbg_ptr, arg0);
        }
        /**
         * @param {number} arg0
         */
        set target_yaw(arg0) {
            wasm.__wbg_set_cinema3drenderer_target_yaw(this.__wbg_ptr, arg0);
        }
        /**
         * @param {number} arg0
         */
        set user_pitch(arg0) {
            wasm.__wbg_set_cinema3drenderer_user_pitch(this.__wbg_ptr, arg0);
        }
        /**
         * @param {number} arg0
         */
        set user_yaw(arg0) {
            wasm.__wbg_set_cinema3drenderer_user_yaw(this.__wbg_ptr, arg0);
        }
    }
    if (Symbol.dispose) Cinema3DRenderer.prototype[Symbol.dispose] = Cinema3DRenderer.prototype.free;
    exports.Cinema3DRenderer = Cinema3DRenderer;
    function __wbg_get_imports() {
        const import0 = {
            __proto__: null,
            __wbg___wbindgen_boolean_get_4f1baf9a00be3c74: function(arg0) {
                const v = arg0;
                const ret = typeof(v) === 'boolean' ? v : undefined;
                return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
            },
            __wbg___wbindgen_throw_4c88d8bf264fd984: function(arg0, arg1) {
                throw new Error(getStringFromWasm0(arg0, arg1));
            },
            __wbg_activeTexture_45b425a49df733ce: function(arg0, arg1) {
                arg0.activeTexture(arg1 >>> 0);
            },
            __wbg_attachShader_817dcec9e79fd18f: function(arg0, arg1, arg2) {
                arg0.attachShader(arg1, arg2);
            },
            __wbg_bindBuffer_b3bb001fdbee089a: function(arg0, arg1, arg2) {
                arg0.bindBuffer(arg1 >>> 0, arg2);
            },
            __wbg_bindTexture_6f822943b2790466: function(arg0, arg1, arg2) {
                arg0.bindTexture(arg1 >>> 0, arg2);
            },
            __wbg_bufferData_2fb8740d60478bf0: function(arg0, arg1, arg2, arg3) {
                arg0.bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
            },
            __wbg_clearColor_0a9b08857907c212: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.clearColor(arg1, arg2, arg3, arg4);
            },
            __wbg_clear_3ffa1ed794f92a04: function(arg0, arg1) {
                arg0.clear(arg1 >>> 0);
            },
            __wbg_compileShader_54c3771819e6caba: function(arg0, arg1) {
                arg0.compileShader(arg1);
            },
            __wbg_createBuffer_ca6ca40e9fb13678: function(arg0) {
                const ret = arg0.createBuffer();
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_createProgram_de0881c688a8e43b: function(arg0) {
                const ret = arg0.createProgram();
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_createShader_d2d90020273cef2b: function(arg0, arg1) {
                const ret = arg0.createShader(arg1 >>> 0);
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_createTexture_eec9a1994aabeca7: function(arg0) {
                const ret = arg0.createTexture();
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_depthFunc_584bfa0174e7628a: function(arg0, arg1) {
                arg0.depthFunc(arg1 >>> 0);
            },
            __wbg_disable_2ead6c11cefd0322: function(arg0, arg1) {
                arg0.disable(arg1 >>> 0);
            },
            __wbg_drawElements_c70e0887282fa70e: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.drawElements(arg1 >>> 0, arg2, arg3 >>> 0, arg4);
            },
            __wbg_enableVertexAttribArray_d485706ade6bebf8: function(arg0, arg1) {
                arg0.enableVertexAttribArray(arg1 >>> 0);
            },
            __wbg_enable_c3c00565c89d3175: function(arg0, arg1) {
                arg0.enable(arg1 >>> 0);
            },
            __wbg_getAttribLocation_8e502cd753de95f7: function(arg0, arg1, arg2, arg3) {
                const ret = arg0.getAttribLocation(arg1, getStringFromWasm0(arg2, arg3));
                return ret;
            },
            __wbg_getContext_d93f904b714852ae: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = arg0.getContext(getStringFromWasm0(arg1, arg2));
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            }, arguments); },
            __wbg_getProgramInfoLog_92d61551e1ab39ea: function(arg0, arg1, arg2) {
                const ret = arg1.getProgramInfoLog(arg2);
                var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                var len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
                getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
            },
            __wbg_getProgramParameter_3edd526f9e5f6c10: function(arg0, arg1, arg2) {
                const ret = arg0.getProgramParameter(arg1, arg2 >>> 0);
                return ret;
            },
            __wbg_getShaderInfoLog_8758e8aea7960121: function(arg0, arg1, arg2) {
                const ret = arg1.getShaderInfoLog(arg2);
                var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                var len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
                getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
            },
            __wbg_getShaderParameter_a346f74d5ba41c4b: function(arg0, arg1, arg2) {
                const ret = arg0.getShaderParameter(arg1, arg2 >>> 0);
                return ret;
            },
            __wbg_getUniformLocation_e0d11c86376cdd26: function(arg0, arg1, arg2, arg3) {
                const ret = arg0.getUniformLocation(arg1, getStringFromWasm0(arg2, arg3));
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_height_ac6f1c3f49c13fe2: function(arg0) {
                const ret = arg0.height;
                return ret;
            },
            __wbg_instanceof_WebGlRenderingContext_6e70e224f022d27a: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof WebGLRenderingContext;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_linkProgram_dee7cda98bacb12f: function(arg0, arg1) {
                arg0.linkProgram(arg1);
            },
            __wbg_readyState_38109b2408eb7368: function(arg0) {
                const ret = arg0.readyState;
                return ret;
            },
            __wbg_shaderSource_c4c06a3cbc2e7bf3: function(arg0, arg1, arg2, arg3) {
                arg0.shaderSource(arg1, getStringFromWasm0(arg2, arg3));
            },
            __wbg_texImage2D_22e71c8b9e1759fa: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
                arg0.texImage2D(arg1 >>> 0, arg2, arg3, arg4 >>> 0, arg5 >>> 0, arg6);
            }, arguments); },
            __wbg_texImage2D_29e073330256c756: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
                arg0.texImage2D(arg1 >>> 0, arg2, arg3, arg4 >>> 0, arg5 >>> 0, arg6);
            }, arguments); },
            __wbg_texParameteri_0afc5d515132fed2: function(arg0, arg1, arg2, arg3) {
                arg0.texParameteri(arg1 >>> 0, arg2 >>> 0, arg3);
            },
            __wbg_uniform1f_0b36dc15cb2b4991: function(arg0, arg1, arg2) {
                arg0.uniform1f(arg1, arg2);
            },
            __wbg_uniform1i_385ebc488d4d763f: function(arg0, arg1, arg2) {
                arg0.uniform1i(arg1, arg2);
            },
            __wbg_uniform3f_b9f8bdb406b70135: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.uniform3f(arg1, arg2, arg3, arg4);
            },
            __wbg_uniformMatrix4fv_cd0ba72d1d780759: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.uniformMatrix4fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
            },
            __wbg_useProgram_f6341ea2eeea1e5a: function(arg0, arg1) {
                arg0.useProgram(arg1);
            },
            __wbg_vertexAttribPointer_9e0e4517b8d274bd: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
                arg0.vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
            },
            __wbg_viewport_aaac6dd8cff1831a: function(arg0, arg1, arg2, arg3, arg4) {
                arg0.viewport(arg1, arg2, arg3, arg4);
            },
            __wbg_width_babc5dc7654771b1: function(arg0) {
                const ret = arg0.width;
                return ret;
            },
            __wbindgen_generic_0000000000000001: function(arg0, arg1) {
                // Cast intrinsic for `Ref(Slice(F32)) -> NamedExternref("Float32Array")`.
                const ret = getArrayF32FromWasm0(arg0, arg1);
                return ret;
            },
            __wbindgen_generic_0000000000000002: function(arg0, arg1) {
                // Cast intrinsic for `Ref(Slice(U16)) -> NamedExternref("Uint16Array")`.
                const ret = getArrayU16FromWasm0(arg0, arg1);
                return ret;
            },
            __wbindgen_generic_0000000000000003: function(arg0, arg1) {
                // Cast intrinsic for `Ref(String) -> Externref`.
                const ret = getStringFromWasm0(arg0, arg1);
                return ret;
            },
            __wbindgen_init_externref_table: function() {
                const table = wasm.__wbindgen_externrefs;
                table.set(0, undefined);
                table.set(1024, undefined);
                table.set(1025, null);
                table.set(1026, true);
                table.set(1027, false);
            },
        };
        return {
            __proto__: null,
            "./cinema_3d_bg.js": import0,
        };
    }

    const Cinema3DRendererFinalization = (typeof FinalizationRegistry === 'undefined')
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry(ptr => wasm.__wbg_cinema3drenderer_free(ptr, 1));

    function addToExternrefTable0(obj) {
        const idx = wasm.__externref_table_alloc();
        wasm.__wbindgen_externrefs.set(idx, obj);
        return idx;
    }

    function getArrayF32FromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        return getFloat32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
    }

    function getArrayU16FromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        return getUint16ArrayMemory0().subarray(ptr / 2, ptr / 2 + len);
    }

    let cachedDataViewMemory0 = null;
    function getDataViewMemory0() {
        if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
            cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
        }
        return cachedDataViewMemory0;
    }

    let cachedFloat32ArrayMemory0 = null;
    function getFloat32ArrayMemory0() {
        if (cachedFloat32ArrayMemory0 === null || cachedFloat32ArrayMemory0.byteLength === 0) {
            cachedFloat32ArrayMemory0 = new Float32Array(wasm.memory.buffer);
        }
        return cachedFloat32ArrayMemory0;
    }

    function getStringFromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        return decodeText(getUint8ArrayMemory0().subarray(ptr, ptr + len));
    }

    let cachedUint16ArrayMemory0 = null;
    function getUint16ArrayMemory0() {
        if (cachedUint16ArrayMemory0 === null || cachedUint16ArrayMemory0.byteLength === 0) {
            cachedUint16ArrayMemory0 = new Uint16Array(wasm.memory.buffer);
        }
        return cachedUint16ArrayMemory0;
    }

    let cachedUint8ArrayMemory0 = null;
    function getUint8ArrayMemory0() {
        if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
            cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
        }
        return cachedUint8ArrayMemory0;
    }

    function handleError(f, args) {
        try {
            return f.apply(this, args);
        } catch (e) {
            const idx = addToExternrefTable0(e);
            wasm.__wbindgen_exn_store(idx);
        }
    }

    function isLikeNone(x) {
        return x === undefined || x === null;
    }

    function passStringToWasm0(arg, malloc, realloc) {
        if (realloc === undefined) {
            const buf = cachedTextEncoder.encode(arg);
            const ptr = malloc(buf.length, 1) >>> 0;
            getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
            WASM_VECTOR_LEN = buf.length;
            return ptr;
        }

        let len = arg.length;
        let ptr = malloc(len, 1) >>> 0;

        const mem = getUint8ArrayMemory0();

        let offset = 0;

        for (; offset < len; offset++) {
            const code = arg.charCodeAt(offset);
            if (code > 0x7F) break;
            mem[ptr + offset] = code;
        }
        if (offset !== len) {
            if (offset !== 0) {
                arg = arg.slice(offset);
            }
            ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
            const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
            const ret = cachedTextEncoder.encodeInto(arg, view);

            offset += ret.written;
            ptr = realloc(ptr, len, offset, 1) >>> 0;
        }

        WASM_VECTOR_LEN = offset;
        return ptr;
    }

    function takeFromExternrefTable0(idx) {
        const value = wasm.__wbindgen_externrefs.get(idx);
        wasm.__externref_table_dealloc(idx);
        return value;
    }

    let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true });
    cachedTextDecoder.decode();
    function decodeText(bytes) {
        return cachedTextDecoder.decode(bytes);
    }

    const cachedTextEncoder = new TextEncoder();

    if (!('encodeInto' in cachedTextEncoder)) {
        cachedTextEncoder.encodeInto = function (arg, view) {
            const buf = cachedTextEncoder.encode(arg);
            view.set(buf);
            return {
                read: arg.length,
                written: buf.length
            };
        };
    }

    let WASM_VECTOR_LEN = 0;

    let wasmModule, wasmInstance, wasm;
    function __wbg_finalize_init(instance, module) {
        wasmInstance = instance;
        wasm = instance.exports;
        wasmModule = module;
        cachedDataViewMemory0 = null;
        cachedFloat32ArrayMemory0 = null;
        cachedUint16ArrayMemory0 = null;
        cachedUint8ArrayMemory0 = null;
        wasm.__wbindgen_start();
        return wasm;
    }

    async function __wbg_load(module, imports) {
        if (typeof Response === 'function' && module instanceof Response) {
            if (!module.ok) {
                throw new Error(`failed to fetch Wasm: ${module.status} ${module.statusText} fetching '${module.url}'`);
            }

            if (typeof WebAssembly.instantiateStreaming === 'function') {
                try {
                    return await WebAssembly.instantiateStreaming(module, imports);
                } catch (e) {
                    const validResponse = expectedResponseType(module.type);

                    if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                        console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                    } else { throw e; }
                }
            }

            const bytes = await module.arrayBuffer();
            return await WebAssembly.instantiate(bytes, imports);
        } else {
            const instance = await WebAssembly.instantiate(module, imports);

            if (instance instanceof WebAssembly.Instance) {
                return { instance, module };
            } else {
                return instance;
            }
        }

        function expectedResponseType(type) {
            switch (type) {
                case 'basic': case 'cors': case 'default': return true;
            }
            return false;
        }
    }

    function initSync(module) {
        if (wasm !== undefined) return wasm;


        if (module !== undefined) {
            if (Object.getPrototypeOf(module) === Object.prototype) {
                ({module} = module)
            } else {
                console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
            }
        }

        const imports = __wbg_get_imports();
        if (!(module instanceof WebAssembly.Module)) {
            module = new WebAssembly.Module(module);
        }
        const instance = new WebAssembly.Instance(module, imports);
        return __wbg_finalize_init(instance, module);
    }

    let __wbg_init_promise;
    async function __wbg_init(module_or_path) {
        if (wasm !== undefined) return wasm;
        if (__wbg_init_promise === undefined) {
            __wbg_init_promise = __wbg_init_once(module_or_path);
            __wbg_init_promise.catch(() => { __wbg_init_promise = undefined; });
        }
        return __wbg_init_promise;
    }

    async function __wbg_init_once(module_or_path) {

        if (module_or_path !== undefined) {
            if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
                ({module_or_path} = module_or_path)
            } else {
                console.warn('using deprecated parameters for the initialization function; pass a single object instead')
            }
        }

        if (module_or_path === undefined && script_src !== undefined) {
            module_or_path = script_src.replace(/\.js$/, "_bg.wasm");
        }
        const imports = __wbg_get_imports();

        if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
            module_or_path = fetch(module_or_path);
        }

        const { instance, module } = await __wbg_load(await module_or_path, imports);

        return __wbg_finalize_init(instance, module);
    }

    return Object.assign(__wbg_init, { initSync }, exports);
})({ __proto__: null });
