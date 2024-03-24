import React, { useState, useEffect, useRef } from 'react';

const ReverseText = () => {
    const [inputText, setInputText] = useState('');
    const [reversedText, setReversedText] = useState('');
    const [copied, setCopied] = useState(false);
    const [typedOutput, setTypedOutput] = useState('');
    const [decoding, setDecoding] = useState(false);
    const textareaRef = useRef(null);

    const bt = "`";
    const a = `^$the quick=b40wn*,fox!j6mps@2v1r/789-lazy:d3g._5?+\n"{(;)]&[%}\\<#>'|~${bt}`;

    useEffect(() => {
        adjustTextareaRows(); // Initially adjust textarea rows
    }, []);

    useEffect(() => {
        window.addEventListener('resize', adjustTextareaRows); // Adjust textarea rows on window resize
        return () => {
            window.removeEventListener('resize', adjustTextareaRows);
        };
    }, []);

    useEffect(() => {
        adjustTextareaRows(); // Adjust textarea rows when inputText changes
    }, [inputText]);


    const reverse = (char) => {
        const variables = {};
        variables[a[0]] = ['b4001', 'b44', 'b79'];
        variables[a[1]] = ['b31', 'b21', 'b68'];
        variables[a[2]] = ['b002', 'b94', 'b008'];
        variables[a[3]] = ['b09318', 'b348', 'b9821'];
        variables[a[4]] = ['b092', 'b787', 'b119'];
        variables[a[5]] = ['b883', 'b104', 'b311'];
        variables[a[6]] = ['b305', 'b206', 'b101'];
        variables[a[7]] = ['b193', 'b213', 'b29'];
        variables[a[8]] = ['b3', 'b201', 'b98'];
        variables[a[9]] = ['b14', 'b564', 'b863'];
        variables[a[10]] = ['b81', 'b27', 'b083'];
        variables[a[11]] = ['b404', 'b90', 'b37'];
        variables[a[12]] = ['b303', 'b834', 'b207'];
        variables[a[13]] = ['b869', 'b062', 'b004'];
        variables[a[14]] = ['b313', 'b241', 'b704'];
        variables[a[15]] = ['b23', 'b009', 'b603'];
        variables[a[16]] = ['b77', 'b09', 'b5'];
        variables[a[17]] = ['b102', 'b69', 'b191'];
        variables[a[18]] = ['b601', 'b007', 'b68'];
        variables[a[19]] = ['b76', 'b32', 'b6'];
        variables[a[20]] = ['b093', 'b46', 'b39'];
        variables[a[21]] = ['b473', 'b97', 'b702'];
        variables[a[22]] = ['b659', 'b28', 'b35'];
        variables[a[23]] = ['b1245', 'b985', 'b'];
        variables[a[24]] = ['b326', 'b3298', 'b159'];
        variables[a[25]] = ['b324', 'b753', 'b654'];
        variables[a[26]] = ['b796', 'b0066', 'b08'];
        variables[a[27]] = ['b1111', 'b3596', 'b900'];
        variables[a[28]] = ['b6543', 'b33', 'b9763'];
        variables[a[29]] = ['b982', 'b000', 'b96'];
        variables[a[30]] = ['b877', 'b91', 'b453'];
        variables[a[31]] = ['b407', 'b9022', 'b5441'];
        variables[a[32]] = ['b617', 'b6788', 'b9728'];
        variables[a[33]] = ['b2008', 'b735', 'b16'];
        variables[a[34]] = ['b1991', 'b8', 'b03'];
        variables[a[35]] = ['b1985', 'b9780', 'b805'];
        variables[a[36]] = ['b570', 'b8624', 'b1971'];
        variables[a[37]] = ['b11', 'b4700', 'b533'];
        variables[a[38]] = ['b7009', 'b5682', 'b1469'];
        variables[a[39]] = ['b0085', 'b1966', 'b6487'];
        variables[a[40]] = ['b1973', 'b9814', 'b100'];
        variables[a[41]] = ['b1975', 'b1496', 'b3008'];
        variables[a[42]] = ['b66', 'b0564', 'b6969'];
        variables[a[43]] = ['b0703', 'b9005', 'b83'];
        variables[a[44]] = ['b30035', 'b5954', 'b315'];
        variables[a[45]] = ['b99301', 'b3057', 'b00509'];
        variables[a[46]] = ['b30682','b06401','b73081'];
        variables[a[47]] = ['b2209','b98564','b229907'];
        variables[a[48]] = ['b19','b96120','b26008'];
        variables[a[49]] = ['b0797','b694','b225'];
        variables[a[50]] = ['b809','b139','b7401'];
        variables[a[51]] = ['b635','b9836','b27006'];
        variables[a[52]] = ['b96654','b87654','b236'];
        variables[a[53]] = ['b9856','b3256','b7789'];
        variables[a[54]] = ['b854','b5645','b00548'];
        variables[a[55]] = ['b0560','b80860','b8061'];
        variables[a[56]] = ['b4613','b05358','b8523'];
        variables[a[57]] = ['b50068','b3504','b56258'];
        variables[a[58]] = ['b0340','b53528','b6037'];
        variables[a[59]] = ['b0856','b820','b9456'];
        variables[a[60]] = ['b5875','b0532','b8708'];
        variables[a[61]] = ['b9654','b3571','b9863'];
        variables[a[62]] = ['b0132','b9752','b4503'];
        variables[a[63]] = ['b9875','b3068','b98703'];
        variables[a[64]] = ['b405','b9804','b69852'];
        variables[a[65]] = ['b3269','b0033','b852'];
        variables[a[66]] = ['b6361','b7835','b4569'];
        variables[a[67]] = ['b1236','b9853','b74369'];
        variables[a[68]] = ['b98007','b35404','b66044'];
        variables[a[69]] = ['b33049','b25646','b5978'];
        // variables[a[70]] = ['b8902','b5469','b897'];

        const lowerChar = char.toLowerCase();
        if (lowerChar in variables) {
            return variables[lowerChar][Math.floor(Math.random() * variables[lowerChar].length)];
        } else {
            return "No caracter associated with this character";
        }
    };

    const reverseSentence = (sentence) => {
        let reversedSentence = '';
        for (let char of sentence) {
            reversedSentence += `${reverse(char)}+ `;
        }
        return reversedSentence.slice(0, -2);
    };

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleReverse = () => {
        if(inputText.trim().length>2){
            const reversed = reverseSentence(inputText);
            setReversedText(reversed);
            setDecoding(true);
        }else{
            setReversedText("please enter at least 3 characters");
            setDecoding(true);
            setTimeout(() => {
                setInputText("");
                setDecoding(false);
                setReversedText('');
            }, 3000);
        }
    };

    const handleCopy2 = () => {
        navigator.clipboard.writeText(reversedText);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 5000);
    };

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i <= reversedText.length) {
                setTypedOutput(reversedText.slice(0, i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 0.059);

        return () => clearInterval(timer);
    }, [reversedText]);

    const adjustTextareaRows = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'; 
        }
    };
    const clear = () => {
        setInputText('');
        setReversedText('');
        setDecoding(false);
        textareaRef.current.focus();
    }

    return (
        <>
        <div className='container'>
                <div className="textarea-container">
                    <textarea
                        className='input'
                        ref={textareaRef}
                        rows={1}
                        placeholder="Enter the text to code"
                        value={inputText}
                        onChange={handleInputChange}
                        id='lk'
                    />
                     <button className="rev-btn" onClick={handleReverse}><b><i className='cld'>R</i></b></button></div>
            </div>
            {decoding && (
                <div className="output-box">
                    <div>
                        <p className="murgi">The code</p>
                        <button className="copy-button" onClick={handleCopy2}>{copied ? 'Copied' : 'Copy'}</button>
                        </div>
                    <p className='oup'>{typedOutput}</p>
                </div>
            )}
            <button className="btr" onClick={clear}>Clear</button>
        </>
    );
};

export default ReverseText;
