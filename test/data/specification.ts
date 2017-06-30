const spec = {
  "inputs": [
    { "name": "x", "type": [ "string" ], "required": true },
    { "name": "y", "type": [ "numeric" ], "required": true }
  ],
  "query": {},
  "template":{
    "padding": "strict",
    "axes": [
      {
        "type": "x",
        "scale": "x",
        "titleOffset": 45,
        "title": "{x.label}",
        "properties": {
          "title": {
            "fontSize": {"value": 15},
            "fill": {"value": "#999"},
            "fontWeight": {"value": "normal"}
          },
          "axis": {
             "stroke": {"value": "#dbdad9"},
             "strokeWidth": {"value": 1.5}
          },
          "ticks": {
             "stroke": {"value": "#dbdad9"}
          },
          "labels": {
            "fill": {"value": "#999"},
            "angle": {"value": -50},
            "align": {"value": "right"},
            "baseline": {"value": "middle"}
          }
        }
      },
      {
        "type": "y",
        "scale": "y",
        "titleOffset": 45,
        "title": "{y.label}",
        "properties": {
          "title": {
            "fontSize": {"value": 15},
            "fill": {"value": "#999"},
            "fontWeight": {"value": "normal"}
          },
          "axis": {
             "stroke": {"value": "#dbdad9"},
             "strokeWidth": {"value": 1.5}
          },
          "ticks": {
             "stroke": {"value": "#dbdad9"}
          },
          "labels": {
            "fill": {"value": "#999"}
          }
        }
      }
    ],
    "data": [
      {
        "name": "table",
        "format": {"property": "features"}
      }
    ],
    "marks": [
      {
        "from": {"data": "table"},
        "properties": {
          "enter": {
          },
          "update": {
            "width": {"band": true, "offset": -1, "scale": "x"},
            "x": {"field": "attributes.{x.field}", "scale": "x"},
            "y": {"field": "attributes.{y.field}", "scale": "y"},
            "y2": {"scale": "y", "value": 0 },
            "fill": {"value": "#0079c1"}
          },
          "hover": {
            "fill": {"value": "#29b6ea"}
          }
        },
        "type": "rect"
      }
    ],
    "scales": [
      {
        "domain": {
          "data": "table",
          "field": "attributes.{x.field}"
        },
        "name": "x",
        "range": "width",
        "type": "ordinal",
        "padding": 0.25
      },
      {
        "domain": {
          "data": "table",
          "field": "attributes.{y.field}"
        },
        "name": "y",
        "nice": true,
        "range": "height"
      }
    ]
  }
}

export default spec
